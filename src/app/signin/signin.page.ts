import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  userName: string;
  password: string;
  validUser = true;
 

  constructor(private UserService:UserService, private router: Router) { }

  ngOnInit() {
  }

  onSignin(): void {
    let isValid = this.UserService.isValidUser(this.userName, this.password);
    if (isValid) {
      this.router.navigate(["/home"]);
    }else
    {this.validUser = false};



  }

}
