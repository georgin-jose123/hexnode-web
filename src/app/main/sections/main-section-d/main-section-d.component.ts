import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-section-d',
  templateUrl: './main-section-d.component.html',
  styleUrls: ['./main-section-d.component.scss']
})
export class MainSectionDComponent implements OnInit,OnDestroy {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplaySpeed:5000,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  ngOnInit(): void {
     
  }
  ngOnDestroy(): void {
    
  }

}