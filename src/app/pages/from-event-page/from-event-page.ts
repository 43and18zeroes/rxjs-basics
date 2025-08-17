import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-from-event-page',
  imports: [],
  templateUrl: './from-event-page.html',
  styleUrl: './from-event-page.scss',
})
export class FromEventPage {
  rxjsService = inject(RxJSService);

  constructor() {
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
     *
     * Mit `takeUntilDestroyed()` wird die Subscription automatisch beendet,
     * sobald die Komponente zerstört wird – ein manuelles `ngOnDestroy` ist nicht nötig.
     */
    this.rxjsService.documentClick$
      .pipe(takeUntilDestroyed())
      .subscribe((e) => {
        console.log('e', e);
      });
  }
}