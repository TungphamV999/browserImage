
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './general-components/home/home.component';


const routes: Routes = [
  {
    path: "home",
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: "image-list",
    pathMatch: 'full',
    loadChildren: () => import('./modules/view-modules/module-images/images.module').then(m => m.ImagesModule),
  },
  // {
  //   path:"**",
  //   pathMatch: 'full',
  //   redirectTo: 'home'
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]

})
export class AppRountingModule { }
