import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

export function initAOS() {
  if (typeof window !== 'undefined') {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
      easing: 'ease-out',
      startEvent: 'DOMContentLoaded'
    });
  }
}

export function refreshAOS() {
  if (typeof window !== 'undefined') {
    AOS.refresh();
  }
} 