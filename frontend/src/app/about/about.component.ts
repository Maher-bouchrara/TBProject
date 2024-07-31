import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    ngAfterViewInit(): void {
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  }

}
