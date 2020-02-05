import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private HttpClient: HttpClient) { }

  public getPosts() {
    return this.HttpClient.get(`https://www.reddit.com/r/aww.json`);
  }
}
