import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss',
})
export class CustomSidenav {
  sideNavCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  iconMargin = computed(() => (this.sideNavCollapsed() ? '12px' : '16px'));

  menuItems = signal<MenuItem[]>([
    {
      icon: 'sync',
      label: 'AsyncPipe',
      route: '/async-pipe',
    },
    {
      icon: 'transform',
      label: 'map',
      route: '/map',
    },
    {
      icon: 'filter_alt',
      label: 'filter',
      route: '/filter',
    },
    {
      icon: 'arrow_right_alt',
      label: 'BehaviourSubject',
      route: '/behaviour-subject',
    },
    {
      icon: 'mouse',
      label: 'fromEvent',
      route: '/from-event',
    },
    {
      icon: 'join_full',
      label: 'combineLatest',
      route: '/combine-latest',
    },
    {
      icon: 'device_thermostat',
      label: 'Hot & Cold',
      route: '/hot-cold',
    },
  ]);
}
