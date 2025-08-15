import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-filter-comp',
  imports: [AsyncPipe],
  templateUrl: './filter-comp.html',
  styleUrl: './filter-comp.scss'
})
export class FilterComp {

  rxjsService = inject(RxJSService);

}
