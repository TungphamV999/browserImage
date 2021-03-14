import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ImageService } from '../../../services/image.service';
import { Image } from '../../../models/image';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
  }

  url$: BehaviorSubject<string> = new BehaviorSubject<string>('')
  description$: BehaviorSubject<string> = new BehaviorSubject<string>('')
  tilte$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  subParams = this.activeRoute.params.pipe(
    switchMap(param => this.imageService.getImage(param.id))
  ).subscribe(image => {
    this.url$.next(image.url);
    this.description$.next(image.description);
    this.tilte$.next(image.title);
  }
  )

  backToImageList() {
    this.router.navigate(['image-list'])
  }

  previousImage(){

  }

  nextImage(){
    
  }


}
