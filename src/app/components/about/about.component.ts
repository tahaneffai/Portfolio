import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="about-section">
      <h2>About Me</h2>
      <p>Welcome to my portfolio! I am a passionate developer dedicated to creating innovative solutions.</p>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  `],
  standalone: true
})
export class AboutComponent {} 