package com.programming.techie.humanfirst.service;

import com.programming.techie.humanfirst.dto.MediaType;
import com.programming.techie.humanfirst.dto.MediaUploadResponse;
import com.programming.techie.humanfirst.dto.VideoUploadResponse;
import com.programming.techie.humanfirst.exceptions.HumanfirstException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.GetObjectPresignRequest;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

import java.time.Duration;
import java.util.Locale;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class VideoStorageService {

    private static final Duration UPLOAD_URL_TTL = Duration.ofMinutes(15);
    private static final Duration VIEW_URL_TTL = Duration.ofHours(12);
    private static final String VIDEO_KEY_PREFIX = "videos/";
    private static final String IMAGE_KEY_PREFIX = "images/";

    private static final Set<String> ALLOWED_IMAGE_CONTENT_TYPES = Set.of(
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/gif",
            "image/webp",
            "image/heic",
            "image/heif"
    );

    private static final Set<String> ALLOWED_VIDEO_CONTENT_TYPES = Set.of(
            "video/mp4",
            "video/quicktime",
            "video/webm",
            "video/x-matroska",
            "video/mkv",
            "application/x-matroska"
    );

    private final S3Presigner s3Presigner;

    @Value("${aws.s3.bucket:}")
    private String bucketName;

    public MediaUploadResponse generateMediaUploadUrl(String fileName, String contentType, MediaType mediaType) {
        if (!isConfigured()) {
            throw new HumanfirstException("Media upload is not configured.");
        }
        if (mediaType == null) {
            throw new HumanfirstException("mediaType is required.");
        }

        String normalizedContentType = normalizeContentType(fileName, contentType);
        validateContentType(mediaType, normalizedContentType);

        String safeFileName = sanitizeFileName(fileName, mediaType);
        String keyPrefix = mediaType == MediaType.IMAGE ? IMAGE_KEY_PREFIX : VIDEO_KEY_PREFIX;
        String key = keyPrefix + UUID.randomUUID() + "-" + safeFileName;

        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .contentType(normalizedContentType)
                .build();

        PutObjectPresignRequest putObjectPresignRequest = PutObjectPresignRequest.builder()
                .signatureDuration(UPLOAD_URL_TTL)
                .putObjectRequest(putObjectRequest)
                .build();

        String uploadUrl = s3Presigner.presignPutObject(putObjectPresignRequest).url().toString();
        return new MediaUploadResponse(uploadUrl, key, mediaType);
    }

    public VideoUploadResponse generateUploadUrl(String fileName, String contentType) {
        MediaUploadResponse response = generateMediaUploadUrl(fileName, contentType, MediaType.VIDEO);
        return new VideoUploadResponse(response.getUploadUrl(), response.getObjectKey());
    }

    public String generateViewUrl(String objectKey) {
        if (!isConfigured() || objectKey == null || objectKey.isBlank()) {
            return null;
        }

        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
                .bucket(bucketName)
                .key(objectKey)
                .build();

        GetObjectPresignRequest getObjectPresignRequest = GetObjectPresignRequest.builder()
                .signatureDuration(VIEW_URL_TTL)
                .getObjectRequest(getObjectRequest)
                .build();

        return s3Presigner.presignGetObject(getObjectPresignRequest).url().toString();
    }

    public boolean isConfigured() {
        return bucketName != null && !bucketName.isBlank();
    }

    private void validateContentType(MediaType mediaType, String contentType) {
        if (mediaType == MediaType.IMAGE && ALLOWED_IMAGE_CONTENT_TYPES.contains(contentType)) {
            return;
        }
        if (mediaType == MediaType.VIDEO && ALLOWED_VIDEO_CONTENT_TYPES.contains(contentType)) {
            return;
        }
        throw new HumanfirstException("Unsupported " + mediaType.name().toLowerCase(Locale.ROOT) + " file type: " + contentType);
    }

    private String normalizeContentType(String fileName, String contentType) {
        String normalized = contentType == null ? "" : contentType.toLowerCase(Locale.ROOT).split(";")[0].trim();

        if (!normalized.isBlank()
                && !"application/octet-stream".equals(normalized)
                && !"binary/octet-stream".equals(normalized)) {
            return normalized;
        }

        String extension = getFileExtension(fileName);
        return switch (extension) {
            case "jpg", "jpeg" -> "image/jpeg";
            case "png" -> "image/png";
            case "gif" -> "image/gif";
            case "webp" -> "image/webp";
            case "heic" -> "image/heic";
            case "heif" -> "image/heif";
            case "mp4" -> "video/mp4";
            case "mov" -> "video/quicktime";
            case "webm" -> "video/webm";
            case "mkv" -> "application/x-matroska";
            default -> "application/octet-stream";
        };
    }

    private String sanitizeFileName(String originalFileName, MediaType mediaType) {
        if (originalFileName == null || originalFileName.isBlank()) {
            return mediaType == MediaType.IMAGE ? "image.jpg" : "video.mp4";
        }
        return originalFileName
                .replaceAll("[^a-zA-Z0-9._-]", "_")
                .replaceAll("_+", "_");
    }

    private String getFileExtension(String fileName) {
        if (fileName == null || fileName.isBlank()) {
            return "";
        }
        int dotIndex = fileName.lastIndexOf('.');
        if (dotIndex < 0 || dotIndex == fileName.length() - 1) {
            return "";
        }
        return fileName.substring(dotIndex + 1).toLowerCase(Locale.ROOT);
    }
}
