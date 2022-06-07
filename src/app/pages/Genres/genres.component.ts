import { Component, OnInit } from '@angular/core';
import { GenreService } from './service/genre.service';

@Component({
  selector: 'app-Genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  constructor(private _genreService: GenreService) { }
  genreData: any;
  genreRecord: any;
  searchText: any;


  ngOnInit(): void {
    this.getAllGenreList();
  }


  getAllGenreList() {
    this._genreService.getAllGenres().subscribe(res => {
      this.genreData = res;
      this.genreRecord = this.genreData;
      console.log(res);
    })
  }

  Search(searchText) {
    debugger;
    this.genreRecord = this.genreData.filter(res => res.name.toLowerCase().includes(searchText)
      || res.genreId.toString().toLowerCase().includes(searchText)
    )
  }

}
