import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageListComponent } from './views/image-list/image-list.component';
import { ImageDetailComponent } from './views/image-list/image-detail/image-detail.component';





@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        pathMatch: 'full',
        component: ImageListComponent,
      },
      {
        path: "image-list/:id",
        pathMatch: 'full',
        component: ImageDetailComponent
      }
    ])
  ]
})
export class ImagesRoutingModule { }
