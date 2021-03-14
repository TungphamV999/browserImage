import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '../../../models/image';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {

  @Input() image: Image;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getDetail(id: any) {
    this.router.navigate(['image-list', id])
  }
}
