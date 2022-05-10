import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'episode/:id',
    loadChildren: () =>
      import('./pages/episode/episode.module').then((m) => m.EpisodePageModule),
  },
  {
    path: 'character/:id',
    loadChildren: () =>
      import('./pages/character/character.module').then(
        (m) => m.CharacterPageModule
      ),
  },
  {
    path: 'location/:id',
    loadChildren: () =>
      import('./pages/location/location.module').then(
        (m) => m.LocationPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
