import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2>My Services</h2>
          <p class="subtitle">Professional solutions I offer</p>
        </div>
        
        <div class="services-grid">
          <!-- Full-Stack Development -->
          <div class="service-card" data-aos="zoom-in" data-aos-delay="100">
            <div class="card-content">
              <div class="icon-container">
                <span class="icon">💻</span>
                <div class="glow"></div>
              </div>
              <h3>Full-Stack Development</h3>
              <p>Building complete web & mobile solutions, from frontend to backend.</p>
              <div class="tech-stack">
                <span>Angular</span>
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div class="card-bg"></div>
          </div>

          <!-- Desktop Applications -->
          <div class="service-card" data-aos="zoom-in" data-aos-delay="200">
            <div class="card-content">
              <div class="icon-container">
                <span class="icon">🖥️</span>
                <div class="glow"></div>
              </div>
              <h3>Desktop Applications</h3>
              <p>Developing efficient and user-friendly desktop software.</p>
              <div class="tech-stack">
                <span>Electron</span>
                <span>Python</span>
                <span>Java</span>
                <span>C++</span>
              </div>
            </div>
            <div class="card-bg"></div>
          </div>

          <!-- UI/UX & Graphic Design -->
          <div class="service-card" data-aos="zoom-in" data-aos-delay="300">
            <div class="card-content">
              <div class="icon-container">
                <span class="icon">🎨</span>
                <div class="glow"></div>
              </div>
              <h3>UI/UX & Graphic Design</h3>
              <p>Creating sleek designs, flyers, and business cards.</p>
              <div class="tech-stack">
                <span>Figma</span>
                <span>Adobe XD</span>
                <span>Photoshop</span>
                <span>Illustrator</span>
              </div>
            </div>
            <div class="card-bg"></div>
          </div>

          <!-- Digital Marketing & Ads -->
          <div class="service-card" data-aos="zoom-in" data-aos-delay="400">
            <div class="card-content">
              <div class="icon-container">
                <span class="icon">📢</span>
                <div class="glow"></div>
              </div>
              <h3>Digital Marketing & Ads</h3>
              <p>Managing social media, branding, and ad campaigns.</p>
              <div class="tech-stack">
                <span>Social Media</span>
                <span>SEO</span>
                <span>Analytics</span>
                <span>Branding</span>
              </div>
            </div>
            <div class="card-bg"></div>
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
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--color-text);
        background: linear-gradient(to right, #3b82f6, #1e3a8a);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .subtitle {
        color: var(--color-text-secondary);
        font-size: 1.1rem;
        line-height: 1.6;
      }
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin: 0 auto;
      max-width: 1200px;
    }

    .service-card {
      position: relative;
      padding: 2.5rem;
      background: rgba(20, 24, 50, 0.5);
      border-radius: 20px;
      border: 1px solid rgba(59, 130, 246, 0.1);
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      overflow: hidden;
      height: 100%;
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-10px);
        border-color: var(--color-primary);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

        .icon-container {
          transform: scale(1.1);
          .icon {
            animation: bounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          }
          .glow {
            opacity: 1;
            transform: scale(1.4);
          }
        }

        .card-bg {
          opacity: 1;
          transform: scale(1.1);
        }

        .tech-stack span {
          transform: translateY(-2px);
          background: var(--color-primary);
          color: white;
        }
      }
    }

    .card-content {
      position: relative;
      z-index: 1;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .card-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        circle at top right,
        rgba(59, 130, 246, 0.1),
        transparent 70%
      );
      opacity: 0;
      transition: all 0.4s ease;
    }

    .icon-container {
      position: relative;
      width: 60px;
      height: 60px;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      border-radius: 15px;

      .icon {
        font-size: 2rem;
        position: relative;
        z-index: 1;
      }

      .glow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
        background: radial-gradient(
          circle,
          rgba(59, 130, 246, 0.3),
          transparent 70%
        );
        opacity: 0;
        transition: all 0.3s ease;
      }
    }

    h3 {
      color: var(--color-primary);
      font-size: 1.4rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    p {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      font-size: 1rem;
      flex: 1;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-top: auto;

      span {
        padding: 0.4rem 1rem;
        background: rgba(59, 130, 246, 0.1);
        border-radius: 20px;
        font-size: 0.9rem;
        color: var(--color-primary);
        transition: all 0.3s ease;
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-6px);
      }
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
        padding: 0 1rem;
      }

      .service-card {
        padding: 2rem;
      }
    }
  `]
})
export class ServicesComponent {} 