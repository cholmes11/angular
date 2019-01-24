import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import {ExperienceComponent} from './experience/experience.component';

const routes: Routes = [
  { path: '', component: IntroComponent, data: { title: 'Intro Component' } },
  { path: 'intro', component: IntroComponent, data: { title: 'Intro Component' } },
  { path: 'experience', component: ExperienceComponent, data: { title: 'Experience Component' } }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
