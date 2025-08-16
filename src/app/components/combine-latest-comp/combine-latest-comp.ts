import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-combine-latest-comp',
  imports: [AsyncPipe],
  templateUrl: './combine-latest-comp.html',
  styleUrl: './combine-latest-comp.scss'
})
export class CombineLatestComp {

  rxjsService = inject(RxJSService);

}
