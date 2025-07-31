import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home';
import { About } from './components/about/about';
// import { SkillsComponent } from './components/skills/skills';
// import { ProjectsComponent } from './components/projects/projects';
// import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'about', component: About },
  // { path: 'skills', component: SkillsComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Redirect to home for unknown routes
];
