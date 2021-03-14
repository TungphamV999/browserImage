import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ImageService } from '../../../services/image.service';
import { Image } from '../../../models/image';
import { switchMap } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit, OnDestroy {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
  }

  image: Image;

  subParams = this.activeRoute.params.pipe(
    switchMap(param => this.imageService.getImage(param.id))
  ).subscribe(image => {
    this.image = image;
  }
  )

  backToImageList() {
    this.router.navigate(['image-list'])
  }

  previousImage() {
  }

  nextImage() {
  }

  ngOnDestroy() {
    this.subParams.unsubscribe();
  }
}
