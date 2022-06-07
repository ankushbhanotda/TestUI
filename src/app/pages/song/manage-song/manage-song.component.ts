import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SongService } from '../service/song.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-song',
  templateUrl: './manage-song.component.html',
  styleUrls: ['./manage-song.component.css']
})
export class ManageSongComponent implements OnInit {

  ManageSongForm: FormGroup;
  activatedId: any;
  artistData: any;
  genreData: any;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private _songService: SongService, private router: Router, private toastrService: ToastrService) { }



  ngOnInit(): void {
    this.activatedId = this.activatedRoute.snapshot.params.id;

    this.getAllArtistRecord();
    this.getAllGenreRecord();
    this.getRecordBySongId();
    this.ManageSongForm = this.formBuilder.group({
      songId: [this.activatedId == (0 || null) ? 0 : this.activatedId],
      name: [''],
      artistId: [''],
      time: [''],
      popularity: [],
      price: [''],
      genreId: ['']
    })
  }

  getAllArtistRecord() {
    this._songService.getAllArtists().subscribe(res => {
      this.artistData = res;
    })
  }

  getAllGenreRecord() {
    this._songService.getAllGenres().subscribe(res => {
      this.genreData = res;
    })
  }

  submit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.ManageSongForm.invalid) {
      return;
    }
    this.addUpdateNewSong();
  }

  addUpdateNewSong() {
    let values: any = this.ManageSongForm.value;
    this._songService.AddUpdateSongRecord(values).subscribe(info => {
      if (info != null) {
        this.router.navigateByUrl('/song');
        this.toastrService.success(info.message);
      }
    });
  }

  goToSongListPage() {
    this.router.navigateByUrl('/song');
  }

  getRecordBySongId() {
    this._songService.getSongRecordById(this.activatedId).subscribe(res => {
      this.ManageSongForm.controls["name"].setValue(res.name);
      this.ManageSongForm.controls["artistId"].setValue(res.artistId);
      this.ManageSongForm.controls["time"].setValue(res.time);
      this.ManageSongForm.controls["popularity"].setValue(res.popularity);
      this.ManageSongForm.controls["price"].setValue(res.price);
      this.ManageSongForm.controls["genreId"].setValue(res.genreId);
    })
  }

}
