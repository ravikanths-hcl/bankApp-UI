import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  isUserLoggedIn = false;
  userName = '';
  userId = '';
  name = '';
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`http://edcl9.sse.codesandbox.io/api/user/login`, { username: username, password: password })
    .pipe(map( res => {
                // login successful if there's a jwt token in the response
                if (res) {
                    this.userName = res.user.username;
                    this.userId = res.user.userid;
                    this.name = res.user.name;
                }
                return res;
    }));
  }


  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.isUserLoggedIn = false;
  }
}
