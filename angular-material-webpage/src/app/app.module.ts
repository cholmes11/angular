import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout';
import {
  MatSidenavModule, MatListModule, MatToolbarModule,
  MatGridListModule, MatFormFieldModule, MatInputModule, MatButtonModule,
  MatSnackBarModule, MatMenuModule, MatIconModule
} from '@angular/material';
import { IntroComponent } from './intro/intro.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    IntroComponent,
    ExperienceComponent,
    HeaderComponent,
    SkillsComponent,
    ContactComponent,
    TimelineComponent,
    TimelineItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
