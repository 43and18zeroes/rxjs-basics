import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';

@Component({
  selector: 'app-filter-page',
  imports: [AsyncPipe],
  templateUrl: './filter-page.html',
  styleUrl: './filter-page.scss',
})
export class FilterPage {
  rxjsService = inject(RxJSService);
}
