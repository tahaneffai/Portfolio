import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  template: `
    <nav [class.scrolled]="isScrolled">
      <div class="nav-container">
        <a routerLink="/" class="logo">
          <span class="logo-text">TN</span>
          <div class="logo-dot"></div>
        </a>

        <div class="nav-links" [class.active]="isMenuOpen">
          <a routerLink="/" 
             routerLinkActive="active" 
             [routerLinkActiveOptions]="{exact: true}"
             (mouseenter)="handleHover($event)">
            Home
          </a>
          <a routerLink="/resume" 
             routerLinkActive="active"
             (mouseenter)="handleHover($event)">
            Resume
          </a>
          <a routerLink="/services" 
             routerLinkActive="active"
             (mouseenter)="handleHover($event)">
            Services
          </a>
          <a routerLink="/projects" 
             routerLinkActive="active"
             (mouseenter)="handleHover($event)">
            Projects
          </a>
          <a routerLink="/contact" 
             routerLinkActive="active"
             (mouseenter)="handleHover($event)">
            Contact
          </a>
          <div class="hover-indicator"></div>
        </div>

        <button class="menu-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    nav {
      background: rgba(10, 13, 28, 0.8);
      backdrop-filter: blur(10px);
      padding: 1rem 0;
      transition: all 0.3s ease;

      &.scrolled {
        padding: 0.8rem 0;
        background: rgba(10, 13, 28, 0.95);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      position: relative;

      .logo-text {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--color-text);
        letter-spacing: 1px;
      }

      .logo-dot {
        width: 6px;
        height: 6px;
        background: var(--color-primary);
        border-radius: 50%;
        margin-left: -0.5rem;
        animation: pulse 2s infinite;
      }
    }

    .nav-links {
      display: flex;
      gap: 2.5rem;
      position: relative;

      a {
        color: var(--color-text);
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        padding: 0.5rem 0;
        transition: color 0.3s ease;
        position: relative;

        &:hover {
          color: var(--color-primary);
        }

        &.active {
          color: var(--color-primary);
        }
      }

      .hover-indicator {
        position: absolute;
        bottom: -2px;
        height: 2px;
        background: var(--gradient-blue);
        transition: all 0.3s ease;
        opacity: 0;
        border-radius: 4px;
      }
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 6px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      z-index: 100;

      span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--color-text);
        transition: all 0.3s ease;
      }

      &.active {
        span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
      }

      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 100%;
        background: var(--color-background);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
        gap: 2rem;

        &.active {
          right: 0;
        }

        a {
          font-size: 1.5rem;
        }

        .hover-indicator {
          display: none;
        }
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.5);
        opacity: 0.5;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 20;
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isBrowser) {
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }
  }

  handleHover(event: MouseEvent) {
    if (!this.isBrowser || window.innerWidth <= 768) return;
    
    const target = event.target as HTMLElement;
    const hoverIndicator = target.parentElement?.querySelector('.hover-indicator') as HTMLElement;
    
    if (hoverIndicator) {
      const rect = target.getBoundingClientRect();
      hoverIndicator.style.width = `${rect.width}px`;
      hoverIndicator.style.left = `${rect.left - target.parentElement!.getBoundingClientRect().left}px`;
      hoverIndicator.style.opacity = '1';

      target.addEventListener('mouseleave', () => {
        hoverIndicator.style.opacity = '0';
      }, { once: true });
    }
  }
} 