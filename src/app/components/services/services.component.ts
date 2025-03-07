import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services-section">
      <div class="container">
        <div class="section-header" data-aos="fade-down">
          <h2>My Services</h2>
          <p class="subtitle">Professional solutions tailored to your needs</p>
        </div>
        
        <div class="filter-container" data-aos="fade-up">
          <button 
            [class.active]="activeFilter === 'all'" 
            (click)="filterServices('all')">
            All
          </button>
          <button 
            [class.active]="activeFilter === 'development'" 
            (click)="filterServices('development')">
            Development
          </button>
          <button 
            [class.active]="activeFilter === 'design'" 
            (click)="filterServices('design')">
            Design
          </button>
          <button 
            [class.active]="activeFilter === 'marketing'" 
            (click)="filterServices('marketing')">
            Marketing
          </button>
        </div>
        
        <div class="services-grid">
          <div 
            class="service-card" 
            *ngFor="let service of filteredServices" 
            data-aos="fade-up"
            [attr.data-category]="service.category">
            <div class="card-content">
              <div class="icon-container">
                <span class="icon">{{ service.icon }}</span>
                <div class="glow"></div>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      min-height: 100vh;
      padding: 6rem 0;
      background-color: var(--color-background);
      color: var(--color-text);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        background: linear-gradient(to right, #3b82f6, #1e3a8a);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 700;
      }

      .subtitle {
        color: var(--color-text-secondary);
        font-size: 1.1rem;
        line-height: 1.6;
      }
    }

    .filter-container {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;

      button {
        padding: 0.6rem 1.2rem;
        background: rgba(20, 24, 50, 0.5);
        border: 1px solid rgba(59, 130, 246, 0.2);
        border-radius: 30px;
        color: var(--color-text-secondary);
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9rem;

        &:hover, &.active {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
        }
      }
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      margin: 0 auto;
    }

    .service-card {
      position: relative;
      background: rgba(20, 24, 50, 0.5);
      border-radius: 20px;
      border: 1px solid rgba(59, 130, 246, 0.1);
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      height: 100%;

      &:hover {
        transform: translateY(-8px);
        border-color: var(--color-primary);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);

        .icon-container {
          transform: scale(1.1);
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.6);
        }
      }
    }

    .card-content {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .icon-container {
      width: 60px;
      height: 60px;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      border-radius: 15px;
      transition: all 0.3s ease;
      position: relative;

      .icon {
        font-size: 1.8rem;
      }

      .glow {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background: rgba(59, 130, 246, 0.5);
        filter: blur(15px);
        opacity: 0.6;
        z-index: -1;
      }
    }

    h3 {
      color: var(--color-primary);
      font-size: 1.3rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    p {
      color: var(--color-text-secondary);
      line-height: 1.6;
      font-size: 0.95rem;
      flex-grow: 1;
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 1.5rem;
      }

      .filter-container {
        gap: 0.5rem;
        
        button {
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
        }
      }
    }

    @media (max-width: 480px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      id: 'web',
      title: 'Website Development',
      description: 'Responsive, SEO-friendly websites built with modern frameworks and best practices for optimal performance.',
      icon: '💻',
      category: 'development'
    },
    {
      id: 'desktop',
      title: 'Desktop Application Development',
      description: 'Efficient and robust desktop applications tailored to meet specific business needs and workflows.',
      icon: '🖥️',
      category: 'development'
    },
    {
      id: 'mobile',
      title: 'Mobile Application Development',
      description: 'Intuitive, high-performance mobile apps for both iOS and Android platforms with seamless user experiences.',
      icon: '📱',
      category: 'development'
    },
    {
      id: 'design',
      title: 'Design Services',
      description: 'Comprehensive UI/UX, graphic design, and branding solutions that elevate your digital presence.',
      icon: '🎨',
      category: 'design'
    },
    {
      id: 'flyers',
      title: 'Flyers',
      description: 'Eye-catching and impactful marketing flyers designed to grab attention and convey your message effectively.',
      icon: '📄',
      category: 'design'
    },
    {
      id: 'business-cards',
      title: 'Business Cards',
      description: 'Professional and creative business card designs that make a lasting impression on potential clients.',
      icon: '🪪',
      category: 'design'
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      description: 'Strategic management and growth of your online presence across various social media platforms.',
      icon: '📱',
      category: 'marketing'
    },
    {
      id: 'digital-ads',
      title: 'Digital Ads',
      description: 'Targeted ad campaigns designed for maximum reach, engagement, and conversion across digital platforms.',
      icon: '📢',
      category: 'marketing'
    }
  ];

  filteredServices: Service[] = [];
  activeFilter: string = 'all';

  ngOnInit() {
    // Initialize filtered services with all services
    this.filteredServices = [...this.services];
    
    // Make sure the activeFilter is set to 'all' initially
    this.activeFilter = 'all';
    
    // AOS is already initialized in AppComponent
  }

  filterServices(category: string) {
    this.activeFilter = category;
    
    if (category === 'all') {
      this.filteredServices = [...this.services];
    } else {
      this.filteredServices = this.services.filter(service => 
        service.category === category
      );
    }
  }
} 