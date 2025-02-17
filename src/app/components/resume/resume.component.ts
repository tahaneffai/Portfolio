import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="resume-section">
      <div class="container">
        <div class="resume-grid">
          <!-- Left Side Navigation -->
          <div class="side-nav">
            <div class="nav-item" [class.active]="activeSection === 'experience'" (click)="setActiveSection('experience')">
              Experience
            </div>
            <div class="nav-item" [class.active]="activeSection === 'education'" (click)="setActiveSection('education')">
              Education
            </div>
            <div class="nav-item" [class.active]="activeSection === 'skills'" (click)="setActiveSection('skills')">
              Skills
            </div>
            <div class="nav-item" [class.active]="activeSection === 'about'" (click)="setActiveSection('about')">
              About me
            </div>
          </div>

          <!-- Right Side Content -->
          <div class="content">
            <!-- Experience Section -->
            <div *ngIf="activeSection === 'experience'" class="section-content" data-aos="fade-up">
              <div class="section-header">
                <h2>My experience</h2>
                <p class="subtitle">Building innovative solutions and gaining valuable experience along the way.</p>
              </div>

              <div class="timeline">
                <div class="timeline-item" data-aos="fade-up">
                  <div class="date">2020 - 2021</div>
                  <div class="role">
                    <h3>Freelance Web Developer</h3>
                    <div class="company">E-commerce Startup</div>
                  </div>
                </div>

                <div class="timeline-item" data-aos="fade-up" data-aos-delay="100">
                  <div class="date">2019 - 2020</div>
                  <div class="role">
                    <h3>Teaching Assistant</h3>
                    <div class="company">Tech Academy</div>
                  </div>
                </div>

                <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
                  <div class="date">2018 - 2019</div>
                  <div class="role">
                    <h3>UI/UX Designer</h3>
                    <div class="company">Digital Agency</div>
                  </div>
                </div>

                <div class="timeline-item" data-aos="fade-up" data-aos-delay="300">
                  <div class="date">2017 - 2018</div>
                  <div class="role">
                    <h3>Junior Developer</h3>
                    <div class="company">Software Development Firm</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Education Section -->
            <div *ngIf="activeSection === 'education'" class="section-content" data-aos="fade-up">
              <div class="section-header">
                <h2>Education Journey</h2>
                <p class="subtitle">My academic path and achievements</p>
              </div>

              <div class="education-grid">
                <div class="education-card" data-aos="zoom-in" data-aos-delay="100">
                  <div class="card-header">
                    <div class="year-badge">2025</div>
                    <h3>Computer Engineering and Telecom Networks</h3>
                  </div>
                  <div class="card-content">
                    <div class="institution">
                      <span class="icon">🎓</span>
                      <span>Ensi Tangier, Morocco</span>
                    </div>
                    <p class="period">Since September 2025</p>
                    <p class="degree">Engineering Degree</p>
                  </div>
                  <div class="card-glow"></div>
                </div>

                <div class="education-card" data-aos="zoom-in" data-aos-delay="200">
                  <div class="card-header">
                    <div class="year-badge">2023</div>
                    <h3>Web Development</h3>
                  </div>
                  <div class="card-content">
                    <div class="institution">
                      <span class="icon">🎓</span>
                      <span>Vinci Rabat, Morocco</span>
                    </div>
                    <p class="period">September 2020 - June 2023</p>
                    <p class="degree">Bachelor's degree</p>
                  </div>
                  <div class="card-glow"></div>
                </div>

                <div class="education-card" data-aos="zoom-in" data-aos-delay="300">
                  <div class="card-header">
                    <div class="year-badge">2020</div>
                    <h3>Physical Science</h3>
                  </div>
                  <div class="card-content">
                    <div class="institution">
                      <span class="icon">🎓</span>
                      <span>RAWAFID Oued Zem, Morocco</span>
                    </div>
                    <p class="period">September 2019 - July 2020</p>
                    <p class="degree">Bachelor's degree</p>
                  </div>
                  <div class="card-glow"></div>
                </div>
              </div>
            </div>

            <!-- Skills Section -->
            <div *ngIf="activeSection === 'skills'" class="section-content" data-aos="fade-up">
              <div class="section-header">
                <h2>Technical Skills</h2>
                <p class="subtitle">Technologies and tools I work with</p>
              </div>

              <div class="skills-grid">
                <div class="skill-item" data-aos="fade-up">
                  <img src="assets/icons/html5.png" alt="HTML5">
                  <span>HTML5</span>
                </div>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="50">
                  <img src="assets/icons/css3.png" alt="CSS3">
                  <span>CSS3</span>
                </div>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="100">
                  <img src="assets/icons/javascript.png" alt="JavaScript">
                  <span>JavaScript</span>
                </div>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="150">
                  <img src="assets/icons/react.png" alt="React">
                  <span>React</span>
                </div>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="200">
                  <img src="assets/icons/angular.png" alt="Angular">
                  <span>Angular</span>
                </div>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="250">
                  <img src="assets/icons/electron.png" alt="Electron">
                  <span>Electron</span>
                </div>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="300">
                  <img src="assets/icons/nodejs.png" alt="Node.js">
                  <span>Node.js</span>
                </div>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="350">
                  <img src="assets/icons/python.png" alt="Python">
                  <span>Python</span>
                </div>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="400">
                  <img src="assets/icons/java.png" alt="Java">
                  <span>Java</span>
                </div>
                <div class="skill-item" data-aos="fade-up" data-aos-delay="450">
                  <img src="assets/icons/spring.png" alt="Spring">
                  <span>Spring</span>
                </div>
              </div>
            </div>

            <!-- About Me Section -->
            <div *ngIf="activeSection === 'about'" class="section-content" data-aos="fade-up">
              <div class="section-header">
                <h2>About Me</h2>
                <p class="subtitle">4th-year Computer Engineering student passionate about creating efficient and innovative digital solutions. 
                Let's build something great together!</p>
              </div>

              <div class="about-content">
                <!-- Personal Information -->
                <div class="section-block" data-aos="fade-up">
                  <div class="section-title">
                    <span class="emoji">🌀</span>
                    <h3>Personal Information</h3>
                  </div>
                  <div class="info-list">
                    <div class="info-item">
                      <div class="icon-container">
                        <span class="icon">🧑‍💻</span>
                      </div>
                      <span class="label">Name:</span>
                      <span class="value">TAHA YASSINE NEFFAI</span>
                    </div>
                    <div class="info-item">
                      <div class="icon-container">
                        <span class="icon">🛰️</span>
                      </div>
                      <span class="label">Nationality:</span>
                      <span class="value">MOROCCAN</span>
                    </div>
                    <div class="info-item">
                      <div class="icon-container">
                        <span class="icon">📡</span>
                      </div>
                      <span class="label">Phone:</span>
                      <span class="value">+212 7000000000</span>
                    </div>
                    <div class="info-item">
                      <div class="icon-container">
                        <span class="icon">🔧</span>
                      </div>
                      <span class="label">Freelance:</span>
                      <span class="value">Available</span>
                    </div>
                    <div class="info-item">
                      <div class="icon-container">
                        <span class="icon">💬</span>
                      </div>
                      <span class="label">Languages:</span>
                      <span class="value">ARABIC, ENGLISH & FRENCH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .resume-section {
      min-height: 100vh;
      padding: 6rem 0;
      background-color: var(--color-background);
    }

    .resume-grid {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 4rem;
    }

    .side-nav {
      position: sticky;
      top: 100px;
      height: fit-content;
    }

    .nav-item {
      padding: 1rem 1.5rem;
      margin-bottom: 0.5rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      background-color: var(--color-surface);
      color: var(--color-text-secondary);

      &:hover {
        background-color: rgba(59, 130, 246, 0.1);
        color: var(--color-primary);
      }

      &.active {
        background-color: var(--color-primary);
        color: white;
      }
    }

    .section-header {
      margin-bottom: 3rem;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--color-text);
      }

      .subtitle {
        color: var(--color-text-secondary);
        font-size: 1.1rem;
        line-height: 1.6;
      }
    }

    .timeline {
      position: relative;
      padding-left: 2rem;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--color-primary);
        opacity: 0.3;
      }
    }

    .timeline-item {
      position: relative;
      padding-bottom: 3rem;

      &::before {
        content: '';
        position: absolute;
        left: -2rem;
        top: 0;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--color-primary);
        border: 2px solid var(--color-background);
      }

      .date {
        color: var(--color-primary);
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .role {
        h3 {
          color: var(--color-text);
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .company {
          color: var(--color-text-secondary);
          font-size: 1rem;
        }
      }
    }

    .section-content {
      animation: fadeIn 0.5s ease-out;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2.5rem;
      padding: 1.5rem 0;
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      padding: 2rem;
      background: rgba(20, 24, 50, 0.5);
      border: 1px solid rgba(59, 130, 246, 0.1);
      border-radius: 20px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(10px);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(
          circle at center,
          rgba(59, 130, 246, 0.1) 0%,
          transparent 70%
        );
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      img {
        width: 85px;
        height: 85px;
        object-fit: contain;
        transition: all 0.3s ease;
        filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.3));
        animation: float 3s ease-in-out infinite;
      }

      span {
        color: var(--color-text);
        font-size: 1rem;
        font-weight: 500;
        position: absolute;
        bottom: -20px;
        opacity: 0;
        transition: all 0.3s ease;
        background: var(--gradient-blue);
        padding: 0.6rem 1.2rem;
        border-radius: 25px;
        white-space: nowrap;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }

      &:hover {
        transform: translateY(-8px);
        border-color: var(--color-primary);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3),
                   0 0 25px rgba(59, 130, 246, 0.2);

        &::before {
          opacity: 1;
        }

        img {
          transform: scale(1.15) translateY(-10px);
          filter: drop-shadow(0 0 16px rgba(59, 130, 246, 0.5));
          animation: none;
        }

        span {
          bottom: 1.5rem;
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }

    @keyframes glow {
      0%, 100% {
        filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.3));
      }
      50% {
        filter: drop-shadow(0 0 16px rgba(59, 130, 246, 0.5));
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .resume-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .side-nav {
        position: relative;
        top: 0;
        display: flex;
        overflow-x: auto;
        padding-bottom: 1rem;
        margin: -1rem -1.5rem 1rem;
        padding: 1rem 1.5rem;

        &::-webkit-scrollbar {
          display: none;
        }
      }

      .nav-item {
        white-space: nowrap;
        margin-bottom: 0;
        margin-right: 0.5rem;
      }

      .timeline {
        padding-left: 1.5rem;
      }

      .timeline-item::before {
        left: -1.5rem;
      }

      .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 1.5rem;
      }

      .skill-item {
        padding: 1.5rem;

        img {
          width: 65px;
          height: 65px;
        }

        span {
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
        }
      }
    }

    @media (max-width: 480px) {
      .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        gap: 1rem;
      }

      .skill-item {
        padding: 1.2rem;

        img {
          width: 55px;
          height: 55px;
        }

        span {
          font-size: 0.85rem;
          padding: 0.4rem 0.9rem;
        }
      }
    }

    .about-content {
      display: flex;
      flex-direction: column;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    .section-block {
      background: rgba(20, 24, 50, 0.7);
      border-radius: 25px;
      border: 2px solid rgba(59, 130, 246, 0.1);
      padding: 2.5rem;
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(
          circle at center,
          rgba(59, 130, 246, 0.1) 0%,
          transparent 70%
        );
        opacity: 0;
        transition: opacity 0.6s ease;
        transform: translate(-50%, -50%) rotate(0deg);
        pointer-events: none;
      }

      &:hover {
        transform: translateY(-8px);
        border-color: rgba(59, 130, 246, 0.3);
        box-shadow: 
          0 20px 40px rgba(0, 0, 0, 0.4),
          0 0 30px rgba(59, 130, 246, 0.3);

        &::before {
          opacity: 1;
          animation: rotate 10s linear infinite;
        }
      }
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      position: relative;
      overflow: hidden;

      .emoji {
        font-size: 2.5rem;
        animation: spin 4s linear infinite;
        filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.5));
      }

      h3 {
        font-size: 2rem;
        background: linear-gradient(to right, #FF0080, #7928CA, #0070F3, #00F5A0);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        background-size: 300% 100%;
        animation: shine 8s linear infinite;
        margin: 0;
        font-weight: 700;
        letter-spacing: 1px;
      }
    }

    .info-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem;
      background: rgba(59, 130, 246, 0.05);
      border-radius: 12px;
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent);
        transform: translateX(-100%);
        transition: transform 0.6s ease;
      }

      &:hover {
        background: rgba(59, 130, 246, 0.15);
        transform: translateX(10px) scale(1.02);

        &::before {
          transform: translateX(100%);
        }

        .icon-container {
          transform: scale(1.15) rotate(8deg);
          .icon {
            animation: bounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          }
          &::after {
            opacity: 1;
            transform: scale(1.4);
          }
        }

        .value {
          transform: translateY(-2px);
          text-shadow: 0 2px 10px rgba(59, 130, 246, 0.3);
        }
      }

      .icon-container {
        position: relative;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        
        &::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 18px;
          background: inherit;
          opacity: 0.4;
          filter: blur(6px);
          z-index: 0;
          transition: all 0.3s ease;
        }

        &::after {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 20px;
          background: inherit;
          opacity: 0;
          z-index: 0;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .icon {
          font-size: 2rem;
          color: white;
          z-index: 1;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4));
          animation: pulse 2s ease-in-out infinite;
        }
      }

      &:nth-child(1) .icon-container {
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
        animation: darkBlueGlow 3s ease-in-out infinite;
        position: relative;
        
        &::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 18px;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          opacity: 0.4;
          filter: blur(6px);
          z-index: 0;
          animation: darkBlueGlow 3s ease-in-out infinite;
        }

        &::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 16px;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          opacity: 0;
          z-index: 0;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .icon {
          animation: darkBlueFloat 3s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
        }

        &:hover {
          .icon {
            animation: darkBlueSpin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          }
          &::after {
            opacity: 0.4;
            transform: scale(1.2);
          }
        }
      }

      &:nth-child(2) .icon-container {
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
        animation: darkBlueGlow 3s ease-in-out infinite;
        position: relative;
        
        &::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 18px;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          opacity: 0.4;
          filter: blur(6px);
          z-index: 0;
          animation: darkBlueGlow 3s ease-in-out infinite;
        }

        &::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 16px;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          opacity: 0;
          z-index: 0;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .icon {
          animation: darkBlueFloat 3s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
        }

        &:hover {
          .icon {
            animation: darkBlueSpin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          }
          &::after {
            opacity: 0.4;
            transform: scale(1.2);
          }
        }
      }

      &:nth-child(3) .icon-container {
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
        animation: darkBlueGlow 3s ease-in-out infinite;
        position: relative;
        
        &::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 18px;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          opacity: 0.4;
          filter: blur(6px);
          z-index: 0;
          animation: darkBlueGlow 3s ease-in-out infinite;
        }

        &::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 16px;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          opacity: 0;
          z-index: 0;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .icon {
          animation: darkBlueFloat 3s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
        }

        &:hover {
          .icon {
            animation: darkBlueSpin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          }
          &::after {
            opacity: 0.4;
            transform: scale(1.2);
          }
        }
      }

      &:nth-child(4) .icon-container {
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
        animation: darkBlueGlow 3s ease-in-out infinite;
        position: relative;
        
        &::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 18px;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          opacity: 0.4;
          filter: blur(6px);
          z-index: 0;
          animation: darkBlueGlow 3s ease-in-out infinite;
        }

        &::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 16px;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          opacity: 0;
          z-index: 0;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .icon {
          animation: darkBlueFloat 3s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
        }

        &:hover {
          .icon {
            animation: darkBlueSpin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          }
          &::after {
            opacity: 0.4;
            transform: scale(1.2);
          }
        }
      }

      &:nth-child(5) .icon-container {
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
        animation: darkBlueGlow 3s ease-in-out infinite;
        position: relative;
        
        &::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 18px;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          opacity: 0.4;
          filter: blur(6px);
          z-index: 0;
          animation: darkBlueGlow 3s ease-in-out infinite;
        }

        &::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 16px;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          opacity: 0;
          z-index: 0;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .icon {
          animation: darkBlueFloat 3s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
        }

        &:hover {
          .icon {
            animation: darkBlueSpin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          }
          &::after {
            opacity: 0.4;
            transform: scale(1.2);
          }
        }
      }

      .label {
        color: var(--color-text-secondary);
        font-size: 1.2rem;
        font-weight: 500;
        min-width: 180px;
        transition: all 0.3s ease;
      }

      .value {
        color: var(--color-text);
        font-size: 1.2rem;
        font-weight: 500;
        transition: all 0.3s ease;
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
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

    @keyframes shine {
      0% {
        background-position: -100% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes rotate {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

    @keyframes gradientBorder {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes iconFloat {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      25% {
        transform: translateY(-4px) rotate(-5deg);
      }
      75% {
        transform: translateY(4px) rotate(5deg);
      }
    }

    @keyframes iconPop {
      0% {
        transform: scale(1) rotate(0deg);
      }
      50% {
        transform: scale(1.2) rotate(180deg);
      }
      100% {
        transform: scale(1) rotate(360deg);
      }
    }

    @keyframes darkBlueGlow {
      0%, 100% {
        filter: drop-shadow(0 0 15px rgba(30, 58, 138, 0.5));
      }
      50% {
        filter: drop-shadow(0 0 25px rgba(59, 130, 246, 0.7));
      }
    }

    @keyframes darkBlueFloat {
      0%, 100% {
        transform: translateY(0) scale(1);
      }
      50% {
        transform: translateY(-5px) scale(1.1);
      }
    }

    @keyframes darkBlueSpin {
      0% {
        transform: rotate(0deg) scale(1);
      }
      50% {
        transform: rotate(180deg) scale(1.2);
      }
      100% {
        transform: rotate(360deg) scale(1);
      }
    }

    .education-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }

    .education-card {
      position: relative;
      background: linear-gradient(145deg, #1a237e, #283593);
      border-radius: 20px;
      padding: 2rem;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      border: 1px solid rgba(103, 58, 183, 0.1);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, 
          rgba(103, 58, 183, 0.1),
          rgba(63, 81, 181, 0.1)
        );
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 
          0 20px 40px rgba(0, 0, 0, 0.3),
          0 0 30px rgba(103, 58, 183, 0.2);

        &::before {
          opacity: 1;
        }

        .card-glow {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.2);
        }

        .year-badge {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(103, 58, 183, 0.4);
        }
      }
    }

    .card-header {
      position: relative;
      margin-bottom: 1.5rem;

      h3 {
        color: #fff;
        font-size: 1.4rem;
        font-weight: 600;
        margin-top: 1rem;
        line-height: 1.4;
      }
    }

    .year-badge {
      position: absolute;
      top: -1rem;
      right: 0;
      background: linear-gradient(135deg, #673ab7, #3f51b5);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(103, 58, 183, 0.3);
    }

    .card-content {
      position: relative;
      z-index: 1;

      .institution {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin-bottom: 1rem;
        color: #b39ddb;
        font-size: 1.1rem;

        .icon {
          font-size: 1.4rem;
          animation: float 3s ease-in-out infinite;
        }
      }

      .period {
        color: #9fa8da;
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
      }

      .degree {
        color: #7986cb;
        font-size: 1rem;
        font-weight: 500;
      }
    }

    .card-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.8);
      width: 150%;
      height: 150%;
      background: radial-gradient(
        circle at center,
        rgba(103, 58, 183, 0.2) 0%,
        transparent 70%
      );
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      pointer-events: none;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    @media (max-width: 768px) {
      .education-grid {
        grid-template-columns: 1fr;
      }

      .education-card {
        padding: 1.5rem;
      }
    }
  `]
})
export class ResumeComponent {
  activeSection: 'experience' | 'education' | 'skills' | 'about' = 'experience';

  setActiveSection(section: 'experience' | 'education' | 'skills' | 'about') {
    this.activeSection = section;
  }
} 