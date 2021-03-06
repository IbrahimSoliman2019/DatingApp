import { Injectable } from '@angular/core';
import {AccountService} from '../_services/account.service';
import {take} from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/User';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountservice:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser:User;
    this.accountservice.userSource$.pipe(take(1)).subscribe(user=>currentUser=user);
    if(currentUser){
     request=request.clone(
       {
         setHeaders:{
           Authorization:`Bearer ${currentUser.token}`
         }
       }
     );
    }
    return next.handle(request);
  }
}
