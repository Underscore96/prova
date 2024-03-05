import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
uname: any;
pws: any;

username = "";
password = "";
errorMsg = "";
faMusic = faMusic;

constructor(private auth: AuthService, private router: Router) { }
  

ngOnInit(): void {
  
 }

login() {
  if (this.username.trim().length === 0) {
    this.errorMsg = "Username is required";
  } else if (this.password.trim().length === 0) {
    this.errorMsg = "Password is required";
  } else {
    this.errorMsg = "";
    let res = this.auth.login(this.username, this.password);
    if (res === 200) {
      this.router.navigate(['home']);
    }
    if (res === 403) {
      this.errorMsg = "Invalid Credentials";
    }
  }
}



}
