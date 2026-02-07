import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.css']
})
export class AccountVerificationComponent implements OnInit {
  message = 'Verifying your account...';
  isError = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    const token = this.activatedRoute.snapshot.paramMap.get('token');
    if (!token) {
      this.isError = true;
      this.message = 'Verification token is missing.';
      return;
    }

    this.authService.verifyAccount(token).subscribe({
      next: () => {
        this.isError = false;
        this.message = 'Account activated successfully. You can now log in.';
      },
      error: (error) => {
        this.isError = true;
        this.message = this.extractErrorMessage(error);
      }
    });
  }

  private extractErrorMessage(error: any): string {
    if (error?.error?.message) {
      return error.error.message;
    }
    if (typeof error?.error === 'string' && error.error.trim().length > 0) {
      return error.error;
    }
    return 'Account verification failed. Please request a new activation email.';
  }
}
