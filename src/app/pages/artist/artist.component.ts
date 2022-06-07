import { Component, OnInit } from '@angular/core';
import { ArtistService } from './service/artist.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistData: any;
  artistRecord: any;
  searchText: any;

  constructor(private _artistService: ArtistService) { }

  ngOnInit(): void {
    debugger;
    this.getArtistList();
  }

  getArtistList() {
    this._artistService.getAllArtist().subscribe(res => {
      debugger;
      this.artistData = res;
      this.artistRecord = this.artistData;
      console.log(this.artistData);
    })


  }

  Search(searchText) {
    debugger;
    this.artistRecord = this.artistData.filter(res => res.name.toLowerCase().includes(searchText)
      || res.artistId.toString().toLowerCase().includes(searchText)
    )
  }

}
