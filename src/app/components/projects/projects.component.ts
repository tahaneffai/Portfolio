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
      
      <!-- Service Category Filter -->
      <div class="service-filter" data-aos="fade-up">
        <button 
          *ngFor="let category of serviceCategories" 
          (click)="filterByCategory(category.id)"
          [class.active]="currentCategory === category.id"
          class="filter-btn">
          <i class="fas" [ngClass]="category.icon"></i>
          {{ category.name }}
        </button>
      </div>
      
      <div class="projects-container">
        <!-- Navigation Dots -->
        <div class="project-nav-dots">
          <button 
            *ngFor="let project of filteredProjects; let i = index" 
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
          [class.disabled]="currentProject === filteredProjects.length - 1"
          aria-label="Next project">
          <i class="fas fa-chevron-right"></i>
        </button>

        <div class="projects-wrapper" [style.transform]="'translateY(' + (-currentProject * 100) + 'vh)'">
          <!-- Project Cards -->
          <article 
            *ngFor="let project of filteredProjects; let i = index" 
            class="project-card" 
            [class.active]="currentProject === i">
            <div class="project-content">
              <div class="project-image">
                <div class="image-container">
                  <img [src]="project.imageUrl" [alt]="project.title" />
                  <div class="project-overlay">
                    <div class="tech-stack">
                      <span *ngFor="let tech of project.technologies">{{ tech }}</span>
                    </div>
                    <a [href]="project.demoUrl" class="play-button" aria-label="Watch demo video">
                      <i class="fas fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content-wrapper">
                <div class="category-badge" [ngClass]="project.category">
                  <i class="fas" [ngClass]="getCategoryIcon(project.category)"></i>
                  {{ getCategoryName(project.category) }}
                </div>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div class="project-links">
                  <a [href]="project.demoUrl" target="_blank" class="live-link">
                    <i [class]="project.demoIcon"></i> {{ project.demoText }}
                    <span class="btn-glow"></span>
                  </a>
                  <a [href]="project.githubUrl" target="_blank" class="github-link">
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
      margin-bottom: 3rem;
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

    /* Service Filter Styles */
    .service-filter {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.8rem 1.5rem;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(59, 130, 246, 0.1);
      color: #4b5563;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .filter-btn:hover {
      background: rgba(59, 130, 246, 0.1);
      transform: translateY(-2px);
    }

    .filter-btn.active {
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
      color: white;
      border-color: transparent;
      box-shadow: 0 10px 20px rgba(30, 58, 138, 0.2);
    }

    .filter-btn i {
      font-size: 1rem;
    }

    /* Category Badge */
    .category-badge {
      display: inline-flex;
      align-items: center;
      padding: 0.4rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
      margin-bottom: 1rem;
      gap: 0.4rem;
    }

    .category-badge.development {
      background: rgba(79, 70, 229, 0.1);
      color: #4f46e5;
      border: 1px solid rgba(79, 70, 229, 0.2);
    }

    .category-badge.design {
      background: rgba(236, 72, 153, 0.1);
      color: #ec4899;
      border: 1px solid rgba(236, 72, 153, 0.2);
    }

    .category-badge.marketing {
      background: rgba(16, 185, 129, 0.1);
      color: #10b981;
      border: 1px solid rgba(16, 185, 129, 0.2);
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
      width: 100%;
      padding-bottom: 66.67%; /* 3:2 Aspect ratio */
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(30, 58, 138, 0.2);
    }

    .image-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
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
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateZ(-100px);
      gap: 1.5rem;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
      transform: translateZ(0);
    }

    .project-card:hover .project-image img {
      transform: scale(1.05);
    }

    .tech-stack {
      display: flex;
      gap: 0.7rem;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0 1.5rem;
    }

    .tech-stack span {
      background: rgba(255, 255, 255, 0.95);
      color: #1e3a8a;
      padding: 0.5rem 1rem;
      border-radius: 30px;
      font-size: 0.8rem;
      font-weight: 500;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .tech-stack span:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }

    .play-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      transition: all 0.3s ease;
    }

    .play-button:hover {
      background: rgba(255, 255, 255, 0.9);
      color: #3b82f6;
      transform: scale(1.1);
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

    @media (max-width: 1024px) {
      .project-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .project-image {
        padding-bottom: 56.25%; /* 16:9 Aspect ratio for smaller screens */
      }
    }

    @media (max-width: 768px) {
      .service-filter {
        gap: 0.6rem;
      }
      
      .filter-btn {
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
      }
      
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
      
      .category-badge {
        font-size: 0.7rem;
        padding: 0.3rem 0.6rem;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  currentProject = 0;
  currentCategory = 'all';
  
  // Define service categories
  serviceCategories = [
    { id: 'all', name: 'All Projects', icon: 'fa-th-large' },
    { id: 'development', name: 'Development', icon: 'fa-code' },
    { id: 'design', name: 'Design', icon: 'fa-palette' },
    { id: 'marketing', name: 'Marketing', icon: 'fa-bullhorn' }
  ];
  
  // Project data with categories
  projects = [
    {
      title: 'Optical Center Management System',
      description: 'A comprehensive desktop application for managing optical centers. Features include client management, invoice generation, inventory tracking for glasses and lenses, order processing, and detailed reporting.',
      imageUrl: 'assets/icons/optical-center.jpg',
      technologies: ['Electron', 'React', 'Redux', 'Node.js', 'SQLite'],
      category: 'development',
      demoUrl: '#',
      demoText: 'Demo Video',
      demoIcon: 'fas fa-desktop',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features. Users can manage projects, assign tasks, track progress, and communicate with team members efficiently.',
      imageUrl: 'assets/project2.jpg',
      technologies: ['Angular', 'Firebase', 'RxJS', 'TypeScript', 'SCSS'],
      category: 'development',
      demoUrl: '#',
      demoText: 'Live Demo',
      demoIcon: 'fas fa-external-link-alt',
      githubUrl: '#'
    },
    {
      title: 'AI Chat Application',
      description: 'An intelligent chatbot application powered by AI, featuring natural language processing. The app can understand user intent, provide contextual responses, and learn from interactions over time.',
      imageUrl: 'assets/project3.jpg',
      technologies: ['React', 'Node.js', 'Express', 'OpenAI API', 'MongoDB'],
      category: 'development',
      demoUrl: '#',
      demoText: 'Live Demo',
      demoIcon: 'fas fa-external-link-alt',
      githubUrl: '#'
    },
    {
      title: 'Corporate Brand Identity',
      description: 'A complete brand identity design for a tech startup, including logo design, color palette, typography, business cards, and brand guidelines document.',
      imageUrl: 'assets/design-project1.jpg',
      technologies: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects'],
      category: 'design',
      demoUrl: '#',
      demoText: 'View Case Study',
      demoIcon: 'fas fa-image',
      githubUrl: '#'
    },
    {
      title: 'E-commerce UX/UI Design',
      description: 'User experience and interface design for a fashion e-commerce platform. The project included user research, wireframing, prototyping, and high-fidelity UI design.',
      imageUrl: 'assets/design-project2.jpg',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
      category: 'design',
      demoUrl: '#',
      demoText: 'Interactive Prototype',
      demoIcon: 'fas fa-desktop',
      githubUrl: '#'
    },
    {
      title: 'Social Media Campaign',
      description: 'Strategic social media campaign for a product launch, including content creation, audience targeting, and performance analysis across multiple platforms.',
      imageUrl: 'assets/marketing-project1.jpg',
      technologies: ['Facebook Ads', 'Instagram', 'Google Analytics', 'Content Strategy'],
      category: 'marketing',
      demoUrl: '#',
      demoText: 'View Results',
      demoIcon: 'fas fa-chart-line',
      githubUrl: '#'
    },
    {
      title: 'SEO Optimization Project',
      description: 'Complete SEO overhaul for an e-commerce website resulting in 150% increase in organic traffic and improved search engine rankings for key product terms.',
      imageUrl: 'assets/marketing-project2.jpg',
      technologies: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building'],
      category: 'marketing',
      demoUrl: '#',
      demoText: 'Case Study',
      demoIcon: 'fas fa-file-alt',
      githubUrl: '#'
    }
  ];
  
  // Filtered projects based on current category - start with all projects
  filteredProjects: any[] = [];

  ngOnInit() {
    // Initialize with all projects
    this.filteredProjects = [...this.projects];
    this.currentCategory = 'all';
    
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

  filterByCategory(category: string) {
    this.currentCategory = category;
    
    if (category === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
    
    // Reset to first project in filtered list
    this.currentProject = 0;
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
    if (this.currentProject < this.filteredProjects.length - 1) {
      this.navigateToProject(this.currentProject + 1);
    }
  }
  
  getCategoryName(categoryId: string): string {
    const category = this.serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Other';
  }
  
  getCategoryIcon(categoryId: string): string {
    const category = this.serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : 'fa-folder';
  }
}