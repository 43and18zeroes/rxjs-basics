import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-behaviour-subject-comp',
  imports: [AsyncPipe],
  templateUrl: './behaviour-subject-comp.html',
  styleUrl: './behaviour-subject-comp.scss'
})
export class BehaviourSubjectComp {
  rxjsService = inject(RxJSService);

  ngOnInit(): void {
    setTimeout(() => {
      this.rxjsService.user$.next({ id: '1', name: 'John' });
    }, 1000)
  }
}
