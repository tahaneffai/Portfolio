import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

const routeTransitionAnimations = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    group([
      query(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('0.3s ease-out', 
          style({ 
            opacity: 0, 
            transform: 'translateY(-20px)'
          })
        )
      ], { optional: true }),
      query(':enter', [
        style({ 
          opacity: 0, 
          transform: 'translateY(20px)'
        }),
        animate('0.3s ease-out', 
          style({ 
            opacity: 1, 
            transform: 'translateY(0)'
          })
        )
      ], { optional: true })
    ])
  ])
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, CommonModule, RouterOutlet],
  animations: [routeTransitionAnimations],
  template: `
    <app-navbar></app-navbar>
    <main [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>
  `,
  styles: [`
    main {
      padding-top: 70px;
      min-height: 100vh;
      background-color: var(--color-background);
      position: relative;
      overflow-x: hidden;
    }

    :host {
      display: block;
      position: relative;
      min-height: 100vh;
    }

    ::ng-deep .page-transition-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, var(--color-primary) 0%, var(--color-background) 100%);
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }

    ::ng-deep .page-transition-overlay.active {
      opacity: 0.15;
      visibility: visible;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'MyPortfolio';

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.isActivated ? outlet.activatedRoute.snapshot.url[0]?.path || '' : '';
  }
}
