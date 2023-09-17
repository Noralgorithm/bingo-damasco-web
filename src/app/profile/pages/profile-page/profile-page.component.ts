import { Component, OnInit, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { User } from 'src/app/shared/types';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent implements OnInit {
  private authenticationService = inject(AuthenticationService);
  private toastr = inject(ToastrService);

  public userInfo: User | null = null;

  ngOnInit() {
    this.fetchUserInfo();
  }

  public fetchUserInfo = () => {
    this.authenticationService.fetchUserInfo().subscribe({
      next: (response) => (this.userInfo = response.data),
      error: (error) => this.toastr.error(error),
    });
  };
}
