import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-hot-cold-page',
  imports: [],
  templateUrl: './hot-cold-page.html',
  styleUrl: './hot-cold-page.scss',
})
export class HotColdPage {
  rxjsService = inject(RxJSService);
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.subscribeToCold();
    this.subscribeToHot();
  }

  subscribeToCold() {
    this.rxjsService.cold$
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => console.log('Subscriber A:', val));

    setTimeout(() => {
      this.rxjsService.cold$
        .pipe(takeUntil(this.destroy$))
        .subscribe((val) => console.log('Subscriber B:', val));
    }, 3000);
  }

  subscribeToHot() {
    this.rxjsService.hot$
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => console.log('Subscriber A:', val));

    setTimeout(() => {
      this.rxjsService.hot$
        .pipe(takeUntil(this.destroy$))
        .subscribe((val) => console.log('Subscriber B:', val));
    }, 3000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
