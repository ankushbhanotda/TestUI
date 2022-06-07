import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  urlAPI = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAllGenres() {
    debugger;
    return this.http.get(this.urlAPI + 'Genres/GetGenres');
  }

}
