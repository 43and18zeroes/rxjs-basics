import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';

@Component({
  selector: 'app-from-event-page',
  imports: [],
  templateUrl: './from-event-page.html',
  styleUrl: './from-event-page.scss'
})
export class FromEventPage {
rxjsService = inject(RxJSService);

  ngOnInit(): void {
    /**
     * Das `subscribe`-Statement abonniert das Observable `documentClick$`.
     *
     * - Jedes Mal, wenn ein Klick-Ereignis (von `documentClick$`) eintrifft, wird die
     * zugehörige Callback-Funktion `(e) => { ... }` ausgeführt.
     *
     * - In dieser Funktion wird das empfangene Klick-Ereignis-Objekt (`e`)
     * auf der Konsole ausgegeben.
     *
     * - Dies ist das Äquivalent zu einem `addEventListener`, jedoch im reaktiven
     * Paradigma von RxJS.
     */
    this.rxjsService.documentClick$.subscribe((e) => {
      console.log('e', e);
    });
  }
}
