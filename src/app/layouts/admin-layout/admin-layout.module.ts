import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SongComponent } from '../../pages/song/song.component';
import { ArtistComponent } from '../../pages/artist/artist.component';
import { GenresComponent } from '../../pages/Genres/Genres.component';
import { ManageArtistComponent } from '../../pages/artist/manage-artist/manage-artist.component';
import { ManageGenreComponent } from '../../pages/Genres/manage-genre/manage-genre.component';
import { ManageSongComponent } from '../../pages/song/manage-song/manage-song.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    SongComponent,
    ArtistComponent,
    GenresComponent,
    ManageArtistComponent,
    ManageGenreComponent,
    ManageSongComponent
  ]
})

export class AdminLayoutModule {}
