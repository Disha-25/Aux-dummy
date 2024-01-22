import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModule } from './feature/feature.module';

const featureRoute = {
  path: 'feature',
  loadChildren: () =>
    import('./feature/feature.module').then((m) => m.FeatureModule),
};

const routes: Routes = [
  { path: '', redirectTo: 'feature', pathMatch: 'full' },
  featureRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
