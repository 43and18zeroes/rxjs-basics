import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';

@Component({
  selector: 'app-hot-cold-comp',
  imports: [],
  templateUrl: './hot-cold-comp.html',
  styleUrl: './hot-cold-comp.scss',
})
export class HotColdComp {
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
