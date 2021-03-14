import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of, Subscription } from 'rxjs';
import { Image, ImagesRatio } from '../../models/image';
import { ImageService } from '../../services/image.service';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit, OnDestroy {

  constructor(
    private imageService: ImageService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ratioImages: string;
  getFavImages: boolean = false;
  isFavoriteFilter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  allImages$: BehaviorSubject<Image[]> = new BehaviorSubject<Image[]>(null)
  ratio$: BehaviorSubject<string> = new BehaviorSubject<string>(null)

  toggleButton(isFavoriteFilter: boolean) {
    this.isFavoriteFilter.next(isFavoriteFilter);
  }

  imagesSub = this.isFavoriteFilter.pipe(
    switchMap(isFF => this.imageService.getImages(isFF))
  ).subscribe(imagesRatio => {
    this.allImages$.next(imagesRatio.images);
    this.ratio$.next(imagesRatio.ratio);

  })

  ngOnDestroy() {
  }

}
