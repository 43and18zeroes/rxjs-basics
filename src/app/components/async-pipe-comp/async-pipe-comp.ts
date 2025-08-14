import { Component, inject } from '@angular/core';
import { ObseravableService } from '../../services/rxjs-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-async-pipe-comp',
  imports: [AsyncPipe],
  templateUrl: './async-pipe-comp.html',
  styleUrl: './async-pipe-comp.scss',
})
export class AsyncPipeComp {
  observableService = inject(ObseravableService);
}
