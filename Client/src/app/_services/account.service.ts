import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../_models/User";
import { map } from "rxjs/operators";
import { ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  baseUrl = "https://localhost:5001/api";
  private userSource = new ReplaySubject<User>(1);
  userSource$ = this.userSource.asObservable();

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(`${this.baseUrl}/account/login`, model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        }
        this.userSource.next(user);
      })
    );
  }

  register(model:any){
  return   this.http.post(`${this.baseUrl}/account/register`,model)
    .pipe(map((user : User)=>{
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
        this.userSource.next(user);
      }
      return user;
    }))
  }

  setCurrentUser(user: User) {
    this.userSource.next(user);
  }

  logout() {
    localStorage.removeItem("user");
    this.userSource.next(null);
  }
}
