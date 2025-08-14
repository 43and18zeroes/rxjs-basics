import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { of } from 'rxjs';
import { AsyncPipeComp } from "./components/async-pipe-comp/async-pipe-comp";

@Component({
  selector: 'app-root',
  imports: [CommonModule, AsyncPipeComp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rxjs-basics');

}
