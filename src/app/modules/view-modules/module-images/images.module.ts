import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesRoutingModule } from './images-routing.module';
import { ImageItemComponent } from './views/image-list/image-item/image-item.component';
import { ImageListComponent } from './views/image-list/image-list.component';
import { ImageDetailComponent } from './views/image-list/image-detail/image-detail.component';
import { AngularMaterialModule } from '../../general-modules/angular-material.module';



@NgModule({
  declarations: [
    ImageItemComponent,
    ImageListComponent,
    ImageDetailComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    AngularMaterialModule
  ]
})
export class ImagesModule { }
