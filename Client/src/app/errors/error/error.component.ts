import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  ValidationErrors:string[]=[];

constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  get404Error(){
    this.http.get(`${this.baseUrl}buggy/not-found`).subscribe(res=>{
      console.log('Ok');
    },error=>{
      console.log(error);
    })
  }
  get400Error(){
    this.http.get(`${this.baseUrl}buggy/bad-request`).subscribe(res=>{
      console.log('Ok');
    },error=>{
      console.log(error);
    })
  }
  get500Error(){
    this.http.get(`${this.baseUrl}buggy/server-error`).subscribe(res=>{
      console.log('Ok');
    },error=>{
      console.log(error);
    })
  }
  get401Error(){
    this.http.get(`${this.baseUrl}buggy/auth`).subscribe(res=>{
      console.log('Ok');
    },error=>{
      console.log(error);
    })
  }
  get400ValidationError(){
    this.http.post(`${this.baseUrl}buggy/register`,{}).subscribe(res=>{
      console.log('Ok');
    },error=>{
      console.log(error);
      this.ValidationErrors = error
    })
  }

}
