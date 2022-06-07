import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from './service/song.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  constructor(private _songService: SongService, private router: Router, private toastrService: ToastrService) { }

  songData: any;
  songRecord: any;
  searchText: any;

  ngOnInit(): void {
    this.getAllSongList();
  }

  getAllSongList() {
    this._songService.getAllSongs().subscribe(res => {
      this.songData = res;
      this.songRecord = this.songData;
      console.log(res);
    })
  }

  AddNewSong() {
    this.router.navigateByUrl('/manageSong')
    }



  UpdateSong(id: any) {
    debugger;
    this.router.navigateByUrl(`manageSong/${id}`);
  }

  DeleteSong(id: any) {
    this._songService.deleteSongRecordById(id).subscribe(res => {
      this.toastrService.success(res.message);
      this.getAllSongList();
    })
  }



  Search(searchText) {
    debugger;
    this.songRecord = this.songData.filter(res => res.name.toLowerCase().includes(searchText)
      || res.artistId.toLowerCase().includes(searchText)
      || res.time.toString().toLowerCase().includes(searchText)
      || res.popularity.toString().toLowerCase().includes(searchText)
      || res.price.toString().toLowerCase().includes(searchText)
    )
  }

}
