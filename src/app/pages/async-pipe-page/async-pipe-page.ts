import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-async-pipe-page',
  imports: [AsyncPipe],
  templateUrl: './async-pipe-page.html',
  styleUrl: './async-pipe-page.scss'
})
export class AsyncPipePage {
  rxjsService = inject(RxJSService);
}
