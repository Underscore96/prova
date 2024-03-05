import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  
  login(uname: string, psw: string) {
    if (uname === 'isa' && psw === '1234') {
      return 200;
    } else {
      return 403;
    }
  }

}
