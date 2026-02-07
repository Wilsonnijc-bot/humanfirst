package com.programming.techie.springredditclone.mapper;

import com.programming.techie.springredditclone.dto.SubredditDto;
import com.programming.techie.springredditclone.model.Post;
import com.programming.techie.springredditclone.model.Subreddit;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface SubredditMapper {

    @Mapping(target = "numberOfPosts", expression = "java(mapPosts(subreddit.getPosts()))")
    SubredditDto mapSubredditToDto(Subreddit subreddit);

    default Integer mapPosts(List<Post> posts) {
        return posts == null ? 0 : posts.size();
    }

    @InheritInverseConfiguration
    @Mapping(target = "posts", ignore = true)
    @Mapping(target = "createdDate", ignore = true)
    @Mapping(target = "user", ignore = true)
    Subreddit mapDtoToSubreddit(SubredditDto subredditDto);
}
