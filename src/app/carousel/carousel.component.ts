import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @ViewChild('slickModal', { static: true }) 
  slickModal!: SlickCarouselComponent;

  

  slides = [
    {
      image: 'https://example.com/slide1.jpg',
      title: 'Slide 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'https://example.com/slide2.jpg',
      title: 'Slide 2',
      description: 'Praesent sed sem in neque mattis hendrerit nec ac augue.'
    },
    {
      image: 'https://example.com/slide3.jpg',
      title: 'Slide 3',
      description: 'Curabitur vehicula felis ac nulla dignissim, eget sagittis neque semper.'
    }
  ];

  carouselConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  prevSlide() {
    this.slickModal.slickPrev();
  }

  nextSlide() {
    this.slickModal.slickNext();
  }

}
