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
  private timeoutIds: number[] = [];

  ngOnInit(): void {
    this.subscribeToCold();
    this.subscribeToHot();
  }

  subscribeToCold() {
    this.rxjsService.cold$
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => console.log('Subscriber A:', val));

    const id = window.setTimeout(() => {
      this.rxjsService.cold$
        .pipe(takeUntil(this.destroy$))
        .subscribe((val) => console.log('Subscriber B:', val));
    }, 3000);
    this.timeoutIds.push(id);
  }

  subscribeToHot() {
    this.rxjsService.hot$
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => console.log('Subscriber A:', val));

    const id = window.setTimeout(() => {
      this.rxjsService.hot$
        .pipe(takeUntil(this.destroy$))
        .subscribe((val) => console.log('Subscriber B:', val));
    }, 3000);
    this.timeoutIds.push(id);
  }

  ngOnDestroy(): void {
    this.timeoutIds.forEach((id) => clearTimeout(id));
    this.timeoutIds = [];
    this.destroy$.next();
    this.destroy$.complete();
  }
}