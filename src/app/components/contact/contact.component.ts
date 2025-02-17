import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <section class="contact-section">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Get In Touch</h2>
          <p class="subtitle">Let's work together on your next project</p>
        </div>

        <div class="contact-container">
          <div class="contact-info" data-aos="fade-right" data-aos-delay="100">
            <div class="info-item">
              <div class="icon-container">
                <span class="icon">📍</span>
              </div>
              <h3>Location</h3>
              <p>Tangier, Morocco</p>
            </div>

            <div class="info-item">
              <div class="icon-container">
                <span class="icon">📧</span>
              </div>
              <h3>Email</h3>
              <p>tahaneffai12&#64;example.com</p>
            </div>

            <div class="info-item">
              <div class="icon-container">
                <span class="icon">📱</span>
              </div>
              <h3>Phone</h3>
              <p>+212 7000000000</p>
            </div>
          </div>

          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form" data-aos="fade-left" data-aos-delay="200">
            <div class="form-group">
              <div class="input-container" [class.focused]="isFocused.name" [class.has-value]="contactForm.get('name')?.value">
                <input 
                  id="name" 
                  type="text" 
                  formControlName="name"
                  (focus)="onFocus('name')"
                  (blur)="onBlur('name')"
                >
                <label for="name">Your Name</label>
                <div class="input-border"></div>
              </div>
              <div class="error-message" *ngIf="contactForm.get('name')?.touched && contactForm.get('name')?.invalid">
                Please enter your name
              </div>
            </div>

            <div class="form-group">
              <div class="input-container" [class.focused]="isFocused.email" [class.has-value]="contactForm.get('email')?.value">
                <input 
                  id="email" 
                  type="email" 
                  formControlName="email"
                  (focus)="onFocus('email')"
                  (blur)="onBlur('email')"
                >
                <label for="email">Your Email</label>
                <div class="input-border"></div>
              </div>
              <div class="error-message" *ngIf="contactForm.get('email')?.touched && contactForm.get('email')?.invalid">
                Please enter a valid email address
              </div>
            </div>

            <div class="form-group">
              <div class="input-container" [class.focused]="isFocused.message" [class.has-value]="contactForm.get('message')?.value">
                <textarea 
                  id="message" 
                  formControlName="message" 
                  rows="5"
                  (focus)="onFocus('message')"
                  (blur)="onBlur('message')"
                ></textarea>
                <label for="message">Your Message</label>
                <div class="input-border"></div>
              </div>
              <div class="error-message" *ngIf="contactForm.get('message')?.touched && contactForm.get('message')?.invalid">
                Please enter your message
              </div>
            </div>

            <button type="submit" [disabled]="!contactForm.valid" class="submit-button">
              <span class="button-content">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
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

    .contact-container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .info-item {
      background: rgba(20, 24, 50, 0.5);
      border-radius: 20px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
      border: 1px solid rgba(59, 130, 246, 0.1);

      &:hover {
        transform: translateY(-5px);
        border-color: var(--color-primary);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

        .icon-container {
          transform: scale(1.1);
          .icon {
            animation: bounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          }
        }
      }

      .icon-container {
        width: 60px;
        height: 60px;
        margin: 0 auto 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
        border-radius: 50%;
        transition: all 0.3s ease;

        .icon {
          font-size: 1.8rem;
          color: white;
        }
      }

      h3 {
        color: var(--color-text);
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: var(--color-text-secondary);
        font-size: 1rem;
      }
    }

    .contact-form {
      background: rgba(20, 24, 50, 0.5);
      border-radius: 20px;
      padding: 3rem;
      border: 1px solid rgba(59, 130, 246, 0.1);
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .form-group {
      position: relative;
    }

    .input-container {
      position: relative;
      
      input, textarea {
        width: 100%;
        padding: 1rem;
        background: rgba(30, 58, 138, 0.1);
        border: none;
        border-radius: 8px;
        color: var(--color-text);
        font-size: 1rem;
        transition: all 0.3s ease;
        outline: none;
        resize: none;

        &:focus {
          background: rgba(30, 58, 138, 0.2);
        }
      }

      label {
        position: absolute;
        left: 1rem;
        top: 1rem;
        color: var(--color-text-secondary);
        transition: all 0.3s ease;
        pointer-events: none;
      }

      .input-border {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(to right, #3b82f6, #1e3a8a);
        transition: width 0.3s ease;
      }

      &.focused, &.has-value {
        label {
          transform: translateY(-1.5rem) scale(0.8);
          color: var(--color-primary);
        }

        .input-border {
          width: 100%;
        }
      }
    }

    .error-message {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 0.5rem;
      opacity: 0;
      transform: translateY(-10px);
      animation: slideDown 0.3s ease forwards;
    }

    .submit-button {
      position: relative;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      border: none;
      border-radius: 8px;
      color: white;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s ease;

      .button-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        position: relative;
        z-index: 1;
      }

      svg {
        transition: transform 0.3s ease;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

        svg {
          transform: translate(5px, -5px);
        }
      }

      &:disabled {
        background: #4b5563;
        cursor: not-allowed;
        transform: none;
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    @keyframes slideDown {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .contact-container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .contact-info {
        order: 2;
      }

      .contact-form {
        order: 1;
        padding: 2rem;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  isFocused = {
    name: false,
    email: false,
    message: false
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onFocus(field: string) {
    this.isFocused[field as keyof typeof this.isFocused] = true;
  }

  onBlur(field: string) {
    this.isFocused[field as keyof typeof this.isFocused] = false;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Here you would typically send the form data to your backend
    }
  }
} 