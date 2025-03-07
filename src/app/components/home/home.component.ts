import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="hero-section">
      <!-- Particle Background -->
      <div class="particles">
        <div class="particle" *ngFor="let particle of particles" [ngStyle]="particle.style"></div>
      </div>

      <div class="container">
        <div class="hero-content" data-aos="fade-up" data-aos-duration="1000">
          <div class="hero-text">
          <p class="intro-text">
          Computer Engineer
            </p>
            <h1>
              HELLO I'M 
              <span class="text-gradient">TAHA YASSINE NEFFAI</span><br>
            </h1>
            <p class="intro-text">
            🌀 My mission is to turn ideas into reality by developing high-quality software solutions to solve real-world problems. I believe in clean programming, elegant design, and continuous learning to stay ahead in the tech industry.
            </p>
            <div class="cta-group">
              <a routerLink="/projects" class="btn btn-primary">View My Work</a>
              <a routerLink="/contact" class="btn btn-secondary">Get in Touch</a>
              <a href="assets/cv.pdf" download="TahaNeffati-CV.pdf" class="btn-cv" (mouseenter)="handleCvHover($event)" (mouseleave)="handleCvLeave($event)">
                <span class="btn-cv-content">
                  <span class="download-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </span>
                  <span class="btn-text">Download CV</span>
                </span>
                <span class="btn-cv-bg"></span>
              </a>
            </div>
          </div>
          <div class="hero-image" data-aos="fade-left" data-aos-duration="1200">
            <div class="image-frame">
              <div class="frame-border"></div>
              <div class="image-container">
                <img src="assets/placeholder-profile.jpg" alt="Professional headshot" class="profile-image">
                <div class="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="1000">
        <div class="scroll-dot"></div>
        <span>Scroll to explore</span>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }

    .hero-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      background-color: var(--color-background);
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      padding: 2rem 0;
    }

    .hero-text {
      h1 {
        font-size: clamp(2.5rem, 5vw, 4rem);
        line-height: 1.2;
        margin-bottom: 1.5rem;
        font-weight: 700;
      }

      .intro-text {
        font-size: clamp(1rem, 2vw, 1.25rem);
        color: var(--color-text-secondary);
        margin-bottom: 2.5rem;
        line-height: 1.6;
      }
    }

    .cta-group {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      flex-wrap: wrap;
    }

    .btn-secondary {
      background: transparent;
      border: 2px solid var(--color-primary);
      color: var(--color-primary);

      &:hover {
        background: rgba(59, 130, 246, 0.1);
        transform: translateY(-2px);
      }
    }

    .btn-cv {
      position: relative;
      display: inline-flex;
      align-items: center;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      text-decoration: none;
      overflow: hidden;
      cursor: pointer;
      border: 2px solid var(--color-primary);
      background: transparent;
      transition: all 0.3s ease;

      .btn-cv-content {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--color-primary);
        z-index: 1;
        transition: all 0.3s ease;
      }

      .download-icon {
        display: flex;
        align-items: center;
        transition: transform 0.3s ease;
      }

      .btn-text {
        font-weight: 600;
      }

      .btn-cv-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--gradient-blue);
        transform: translateY(100%);
        transition: transform 0.3s ease;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);

        .btn-cv-content {
          color: white;
        }

        .download-icon {
          transform: translateY(3px);
        }

        .btn-cv-bg {
          transform: translateY(0);
        }
      }

      &:active {
        transform: translateY(0);
      }
    }

    .hero-image {
      position: relative;
      padding: 1rem;
      display: flex;
      justify-content: center;
    }

    .image-frame {
      position: relative;
      width: 400px;
      height: 400px;
      max-width: 100%;
      animation: float 5s ease-in-out infinite;
    }

    .frame-border {
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border: 2px dashed var(--color-primary);
      border-radius: 50%;
      opacity: 0.6;
      z-index: 2;
      animation: borderGlow 3s ease-in-out infinite, rotate 20s linear infinite;
    }

    .image-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      background-color: #000000;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 8px solid var(--color-background);
        border-radius: 50%;
        z-index: 2;
      }
    }

    .profile-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      z-index: 1;
      transition: transform 0.3s ease;
      filter: brightness(0.9);

      &:hover {
        transform: scale(1.05);
      }
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.4) 100%
      );
      z-index: 2;
      border-radius: 50%;
      pointer-events: none;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes rotate {
      from {
        transform: rotate(200deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes borderGlow {
      0%, 100% {
        box-shadow: 0 0 15px var(--color-primary);
        opacity: 0.6;
      }
      50% {
        box-shadow: 0 0 25px var(--color-primary);
        opacity: 0.8;
      }
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-text-secondary);
      font-size: 0.875rem;

      .scroll-dot {
        width: 8px;
        height: 8px;
        background: var(--color-primary);
        border-radius: 50%;
        animation: pulse 2s infinite;
      }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }

      .cta-group {
        justify-content: center;
      }

      .hero-image {
        order: -1;
        padding: 0;
      }

      .image-frame {
        width: 300px;
        height: 300px;
      }

      .btn-cv {
        width: 100%;
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .image-frame {
        width: 250px;
        height: 250px;
      }
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {
  particles: Array<{style: any}> = [];
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Create particles
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        style: {
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          width: Math.random() * 3 + 'px',
          height: Math.random() * 3 + 'px',
          animationDelay: Math.random() * 2 + 's',
          animationDuration: (Math.random() * 3 + 2) + 's'
        }
      });
    }
  }

  ngAfterViewInit() {
    // AOS is already initialized in AppComponent
  }

  handleCvHover(event: MouseEvent) {
    if (!this.isBrowser) return;
    
    const target = event.currentTarget as HTMLElement;
    const icon = target.querySelector('.download-icon') as HTMLElement;
    
    if (icon) {
      icon.style.transform = 'translateY(3px)';
    }
  }

  handleCvLeave(event: MouseEvent) {
    if (!this.isBrowser) return;
    
    const target = event.currentTarget as HTMLElement;
    const icon = target.querySelector('.download-icon') as HTMLElement;
    
    if (icon) {
      icon.style.transform = 'translateY(0)';
    }
  }
} 