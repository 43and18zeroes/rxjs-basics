import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';

@Component({
  selector: 'app-behaviour-subject-page',
  imports: [AsyncPipe],
  templateUrl: './behaviour-subject-page.html',
  styleUrl: './behaviour-subject-page.scss'
})
export class BehaviourSubjectPage {
  rxjsService = inject(RxJSService);

  // Wartet 1 Sekunde und sendet dann den neuen Benutzerwert { id: '1', name: 'John' }
  // an alle aktuellen und zukünftigen Abonnenten des BehaviorSubjects user$.
  // .next(...) ist eine Methode von Subject/BehaviorSubject, die einen neuen Wert
  // in den Stream "emittiert". Alle Subscriber erhalten diesen Wert sofort.
  // Bei BehaviorSubject wird dieser Wert zudem als "letzter bekannter Wert" gespeichert
  // und direkt an neue Subscriber ausgegeben, die später hinzukommen.
  ngOnInit(): void {
    setTimeout(() => {
      this.rxjsService.user$.next({ id: '1', name: 'John' });
    }, 1000);
  }
}
