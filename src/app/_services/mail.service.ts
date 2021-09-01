import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Mail } from '../models/mail.model';



@Injectable({
  providedIn: 'root'
})

export class MailService {

  constructor(private http :HttpClient) {}
  private baseUrl ='http://localhost:8080/api/mails';


  enviarEmail(email :Mail): Observable<any> {
    return this.http.post(`${this.baseUrl}`, email);
  }

}
