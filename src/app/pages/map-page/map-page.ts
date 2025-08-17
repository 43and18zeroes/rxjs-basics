import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-map-page',
  imports: [AsyncPipe],
  templateUrl: './map-page.html',
  styleUrl: './map-page.scss',
})
export class MapPage {
  rxjsService = inject(RxJSService);
}
