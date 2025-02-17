import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-section">
      <div class="section-header" data-aos="fade-down">
        <h2>Featured Projects</h2>
        <p class="subtitle">Showcasing my best work</p>
        <div class="header-line"></div>
      </div>
      
      <div class="projects-container">
        <!-- Navigation Dots -->
        <div class="project-nav-dots">
          <button 
            *ngFor="let dot of [0, 1, 2]; let i = index" 
            [class.active]="currentProject === i"
            (click)="navigateToProject(i)"
            class="nav-dot"
            [attr.aria-label]="'Navigate to project ' + (i + 1)">
          </button>
        </div>

        <!-- Navigation Arrows -->
        <button 
          class="nav-arrow prev" 
          (click)="prevProject()"
          [class.disabled]="currentProject === 0"
          aria-label="Previous project">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button 
          class="nav-arrow next" 
          (click)="nextProject()"
          [class.disabled]="currentProject === 2"
          aria-label="Next project">
          <i class="fas fa-chevron-right"></i>
        </button>

        <div class="projects-wrapper" [style.transform]="'translateY(' + (-currentProject * 100) + 'vh)'">
          <!-- Optical Center Project -->
          <article class="project-card" [class.active]="currentProject === 0">
            <div class="project-content">
              <div class="project-image">
                <img src="assets/icons/optical-center.jpg" alt="Optical Center Management System" />
                <div class="project-overlay">
                  <div class="tech-stack">
                    <span>Java</span>
                    <span>JavaFX</span>
                    <span>MySQL</span>
                    <span>Scene Builder</span>
                  </div>
                </div>
              </div>
              <div class="content-wrapper">
                <h3>Optical Center Management System</h3>
                <p>A comprehensive desktop application for managing optical centers. Features include client management, invoice generation, inventory tracking for glasses and lenses, order processing, and detailed reporting.</p>
                <div class="project-links">
                  <a href="#" target="_blank" class="live-link">
                    <i class="fas fa-desktop"></i> Demo Video
                    <span class="btn-glow"></span>
                  </a>
                  <a href="#" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> GitHub
                    <span class="btn-glow"></span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <!-- Task Management Project -->
          <article class="project-card" [class.active]="currentProject === 1">
            <div class="project-content">
              <div class="project-image">
                <img src="assets/project2.jpg" alt="Task Management App" />
                <div class="project-overlay">
                  <div class="tech-stack">
                    <span>Angular</span>
                    <span>Firebase</span>
                    <span>TypeScript</span>
                  </div>
                </div>
              </div>
              <div class="content-wrapper">
                <h3>Task Management App</h3>
                <p>A collaborative task management application with real-time updates and team features.</p>
                <div class="project-links">
                  <a href="#" target="_blank" class="live-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                    <span class="btn-glow"></span>
                  </a>
                  <a href="#" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> GitHub
                    <span class="btn-glow"></span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <!-- AI Chat Project -->
          <article class="project-card" [class.active]="currentProject === 2">
            <div class="project-content">
              <div class="project-image">
                <img src="assets/project3.jpg" alt="AI Chat Application" />
                <div class="project-overlay">
                  <div class="tech-stack">
                    <span>Vue.js</span>
                    <span>Python</span>
                    <span>OpenAI</span>
                  </div>
                </div>
              </div>
              <div class="content-wrapper">
                <h3>AI Chat Application</h3>
                <p>An intelligent chatbot application powered by AI, featuring natural language processing.</p>
                <div class="project-links">
                  <a href="#" target="_blank" class="live-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                    <span class="btn-glow"></span>
                  </a>
                  <a href="#" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> GitHub
                    <span class="btn-glow"></span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      padding: 6rem 2rem;
      max-width: 1400px;
      margin: 0 auto;
      background: linear-gradient(to bottom, rgba(30, 58, 138, 0.05), rgba(59, 130, 246, 0.05));
      overflow: hidden;
    }

    .section-header {
      text-align: center;
      margin-bottom: 5rem;
      position: relative;
    }

    .section-header h2 {
      font-size: 3rem;
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-bottom: 1rem;
      font-weight: 700;
      position: relative;
      display: inline-block;
    }

    .section-header .subtitle {
      color: var(--color-text-secondary);
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }

    .header-line {
      width: 100px;
      height: 4px;
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
      margin: 0 auto;
      border-radius: 2px;
      position: relative;
    }

    .header-line::before,
    .header-line::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #3b82f6;
      transform: translateY(-50%);
    }

    .header-line::before {
      left: -10px;
    }

    .header-line::after {
      right: -10px;
    }

    .projects-container {
      position: relative;
      height: 100vh;
      overflow: hidden;
    }

    .projects-wrapper {
      position: relative;
      transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .project-card {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.5s ease;
      padding: 2rem;
    }

    .project-card.active {
      opacity: 1;
    }

    .project-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .project-image {
      position: relative;
      height: 400px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(30, 58, 138, 0.2);
      transform-style: preserve-3d;
      perspective: 1000px;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .project-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(30, 58, 138, 0.9), rgba(59, 130, 246, 0.9));
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateZ(-100px);
    }

    .project-card:hover .project-overlay {
      opacity: 1;
      transform: translateZ(0);
    }

    .project-card:hover .project-image img {
      transform: scale(1.1) translateZ(50px);
    }

    .tech-stack {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      padding: 1rem;
    }

    .tech-stack span {
      background: rgba(255, 255, 255, 0.95);
      color: #1e3a8a;
      padding: 0.6rem 1.2rem;
      border-radius: 30px;
      font-size: 0.9rem;
      font-weight: 500;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .tech-stack span:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }

    .content-wrapper {
      background: rgba(255, 255, 255, 0.05);
      padding: 2.5rem;
      border-radius: 20px;
      border: 1px solid rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    .project-card:hover .content-wrapper {
      transform: translateY(-5px);
      border-color: rgba(59, 130, 246, 0.3);
      box-shadow: 0 20px 40px rgba(30, 58, 138, 0.1);
    }

    .project-content h3 {
      font-size: 1.8rem;
      color: #1e3a8a;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .project-content p {
      color: #4b5563;
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 2rem;
    }

    .project-links {
      display: flex;
      gap: 1.5rem;
    }

    .project-links a {
      text-decoration: none;
      padding: 0.8rem 1.5rem;
      border-radius: 12px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .btn-glow {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(255, 255, 255, 0.8), transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .live-link {
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
      color: white;
    }

    .github-link {
      background: rgba(30, 58, 138, 0.1);
      color: #1e3a8a;
    }

    .project-links a:hover {
      transform: translateY(-2px);
    }

    .project-links a:hover .btn-glow {
      opacity: 0.2;
      animation: glow 1.5s infinite;
    }

    @keyframes glow {
      0%, 100% {
        transform: scale(1);
        opacity: 0.2;
      }
      50% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    @media (max-width: 1024px) {
      .project-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .project-image {
        height: 300px;
      }
    }

    @media (max-width: 768px) {
      .project-card {
        padding: 1rem;
      }

      .project-image {
        height: 250px;
      }
    }

    /* Navigation Dots Styles */
    .project-nav-dots {
      position: fixed;
      right: 2rem;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      z-index: 10;
    }

    .nav-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid #3b82f6;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0;
      position: relative;
    }

    .nav-dot::before {
      content: '';
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      background: radial-gradient(circle at center, rgba(59, 130, 246, 0.2), transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .nav-dot:hover::before {
      opacity: 1;
    }

    .nav-dot.active {
      background: #3b82f6;
      transform: scale(1.2);
    }

    /* Navigation Arrows Styles */
    .nav-arrow {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.1);
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(5px);
      z-index: 10;
      color: #3b82f6;
      font-size: 1.2rem;
      border: 2px solid rgba(59, 130, 246, 0.2);
    }

    .nav-arrow.prev {
      left: 2rem;
    }

    .nav-arrow.next {
      right: 2rem;
    }

    .nav-arrow:hover {
      background: rgba(59, 130, 246, 0.1);
      transform: translateY(-50%) scale(1.1);
      border-color: rgba(59, 130, 246, 0.4);
    }

    .nav-arrow.disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }

    .nav-arrow::before {
      content: '';
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      background: radial-gradient(circle at center, rgba(59, 130, 246, 0.2), transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .nav-arrow:hover::before {
      opacity: 1;
    }

    @media (max-width: 768px) {
      .project-nav-dots {
        right: 1rem;
      }

      .nav-arrow {
        width: 40px;
        height: 40px;
        font-size: 1rem;
      }

      .nav-arrow.prev {
        left: 1rem;
      }

      .nav-arrow.next {
        right: 1rem;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  currentProject = 0;

  ngOnInit() {
    // AOS is already initialized in AppComponent
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch(event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        this.prevProject();
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        this.nextProject();
        break;
    }
  }

  navigateToProject(index: number) {
    this.currentProject = index;
  }

  prevProject() {
    if (this.currentProject > 0) {
      this.navigateToProject(this.currentProject - 1);
    }
  }

  nextProject() {
    if (this.currentProject < 2) {
      this.navigateToProject(this.currentProject + 1);
    }
  }
}