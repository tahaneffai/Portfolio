import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    data: { animation: 'home' }
  },
  { 
    path: 'resume', 
    component: ResumeComponent,
    data: { animation: 'resume' }
  },
  { 
    path: 'services', 
    component: ServicesComponent,
    data: { animation: 'services' }
  },
  { 
    path: 'projects', 
    component: ProjectsComponent,
    data: { animation: 'projects' }
  },
  { 
    path: 'contact', 
    component: ContactComponent,
    data: { animation: 'contact' }
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
