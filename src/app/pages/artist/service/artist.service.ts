import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  urlAPI = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAllArtist() {
    debugger;
    return this.http.get(this.urlAPI + 'Artists/GetArtists');
  }
}
