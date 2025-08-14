import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-map-comp',
  imports: [AsyncPipe],
  templateUrl: './map-comp.html',
  styleUrl: './map-comp.scss',
})
export class MapComp {
  rxJSService = inject(RxJSService);
}
