import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    $('.testimonial-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      autoplay: true,         // Enable autoplay
      autoplayTimeout: 5000,  // Set autoplay delay to 2 seconds
      autoplayHoverPause: false, // Pause on hover
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        }
      }
    });
  }
}
