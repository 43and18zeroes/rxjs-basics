import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';

@Component({
  selector: 'app-hot-cold-page',
  imports: [],
  templateUrl: './hot-cold-page.html',
  styleUrl: './hot-cold-page.scss',
})
export class HotColdPage {
  rxjsService = inject(RxJSService);

  ngOnInit(): void {
    this.subscribeToCold();
    this.subscribeToHot();
  }

  subscribeToCold() {
    // Zwei Subscriber zu unterschiedlichen Zeitpunkten
    this.rxjsService.cold$.subscribe((val) =>
      console.log('Subscriber A:', val)
    );

    setTimeout(() => {
      this.rxjsService.cold$.subscribe((val) =>
        console.log('Subscriber B:', val)
      );
    }, 3000);
  }

  subscribeToHot() {
    this.rxjsService.hot$.subscribe((val) => console.log('Subscriber A:', val));

    setTimeout(() => {
      this.rxjsService.hot$.subscribe((val) =>
        console.log('Subscriber B:', val)
      );
    }, 3000);
  }
}
