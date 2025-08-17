import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';

@Component({
  selector: 'app-combine-latest-page',
  imports: [AsyncPipe],
  templateUrl: './combine-latest-page.html',
  styleUrl: './combine-latest-page.scss',
})
export class CombineLatestPage {
  rxjsService = inject(RxJSService);
}
