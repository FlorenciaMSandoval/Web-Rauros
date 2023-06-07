import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @ViewChild('slickModal', { static: true }) slickModal!: SlickCarouselComponent;


  

  slides = [
    {
      image: 'assets/images/main/1.jpg',
      title: 'Mision',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/images/main/2.jpg',
      title: 'Vision',
      description: 'Praesent sed sem in neque mattis hendrerit nec ac augue.'
    },
    {
      image: 'assets/images/main/3.jpg',
      title: 'Values',
      description: 'Curabitur vehicula felis ac nulla dignissim, eget sagittis neque semper.'
    }
  ];


  slideConfig={
    slidesToShow:1,
    slidesToScroll:1,
    dots:true,
    autoplay: true,
    autoplaySpeed: 5000,
  }



  // carouselConfig = {
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   dots: false,
  //   prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
  //   nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
  // };
  
  

  // prevSlide() {
  //   this.slickModal.slickPrev();
  // }

  // nextSlide() {
  //   this.slickModal.slickNext();
  // }
//   slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
//   slickInit(e:any) {
//     console.log('slick initialized');
//   }
    
//   breakpoint(e:any) {
//     console.log('breakpoint');
//   }
    
//   afterChange(e:any) {
//     console.log('afterChange');
//   }
    
//   beforeChange(e:any) {
//     console.log('beforeChange');
//   }
constructor() { }

  ngOnInit(): void {
  }
 }
