import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SongComponent } from '../../pages/song/song.component';
import { ArtistComponent } from '../../pages/artist/artist.component';
import { GenresComponent } from '../../pages/Genres/Genres.component';
import { ManageSongComponent } from '../../pages/song/manage-song/manage-song.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'song', component: SongComponent },
  { path: 'manageSong', component: ManageSongComponent },
  { path: 'manageSong/:id', component: ManageSongComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'genre', component: GenresComponent },
];
