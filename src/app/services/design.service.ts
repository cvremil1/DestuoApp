import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignsData } from '../models/designs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  
})
export class DesignService {

  apiUrl ="http://localhost:3000/";

  constructor(private http:HttpClient) { }
  
  getDesign(page:number =1, limit:number =2):Observable<DesignsData[]>{
  return  this.http.get<DesignsData[]>(`${this.apiUrl}design/?_page=${page}&_limit=${limit}`);
  }
}