import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-carousel',
  	templateUrl: 'my-carousel.component.html',
  	// styleUrls: ['x.component.css']
})

export class MyCarouselComponent {

  backgroundArray = [
    'https://s3-ap-southeast-2.amazonaws.com/micepage-public/landing_images/bg2_dark.png'
  ];
  backgroundCount = 0;

  customBackground = {
    'background-image' : 'url(' + this.backgroundArray[this.backgroundCount] + ')',
    'height' : '400px' // Forced height for testing purposes
  };
}
