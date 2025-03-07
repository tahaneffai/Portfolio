import * as AOS from 'aos';

export function initAOS() {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
    offset: 50,
    easing: 'ease-out',
    startEvent: 'DOMContentLoaded'
  });
}

export function refreshAOS() {
  AOS.refresh();
} 