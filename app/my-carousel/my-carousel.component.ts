import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
	moduleId: module.id,
	selector: 'my-carousel',
  	templateUrl: 'my-carousel.component.html',
  	// styleUrls: ['x.component.css']
})

export class MyCarouselComponent {

  backgroundArray = [
    'https://s3-ap-southeast-2.amazonaws.com/micepage-public/landing_images/bg2_dark.png',
    'https://s3-ap-southeast-2.amazonaws.com/micepage-public/landing_images/bg5_dark.png',
    'https://s3-ap-southeast-2.amazonaws.com/micepage-public/landing_images/bg3_dark.png',
    'https://s3-ap-southeast-2.amazonaws.com/micepage-public/landing_images/bg4_dark.png',
  ];
  backgroundCount = 0;

  customBackground = {
    'background-image' : 'url(' + this.backgroundArray[this.backgroundCount] + ')',
    'height' : '400px' // Forced height for testing purposes
  };

  ngOnInit() {
    let interval = Observable.interval(5000)      // Set interval to x milliseconds.
                             .take(20)            // Hard loop limit for testing (TODO: Remove for production or increase to reasonable limit)
                             .map((x) => x + 1)   // Set loop index and increment
                             .subscribe((x) => {  // Observe loop index and execute
                               if (this.backgroundCount < this.backgroundArray.length - 1) {
                                 this.backgroundCount++;
                                 this.customBackground['background-image'] = 'url(' + this.backgroundArray[this.backgroundCount] + ')';
                               }
                               else {
                                 this.backgroundCount = 0;
                                 this.customBackground['background-image'] = 'url(' + this.backgroundArray[this.backgroundCount] + ')';
                               }
                             })
  }
}
