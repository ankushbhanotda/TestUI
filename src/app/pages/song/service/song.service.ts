import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  urlAPI = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAllSongs() {
    return this.http.get(this.urlAPI + 'Songs/GetSongs');
  }

  AddUpdateSongRecord(data: any):Observable<any> {
    return this.http.post(this.urlAPI + 'Songs/AddUpdateSong', data);
  }

  getSongRecordById(id: any): Observable<any> {
    return this.http.get(this.urlAPI + 'Songs/GetSong/' + id);
  }
  
  deleteSongRecordById(id: any): Observable<any> {
    debugger;
    return this.http.delete(this.urlAPI + 'Songs/DeleteSong/'+ id);
  }

  getAllGenres() {
    return this.http.get(this.urlAPI + 'Genres/GetGenres');
  }

  getAllArtists() {
    return this.http.get(this.urlAPI + 'Artists/GetArtists');
  }

}
