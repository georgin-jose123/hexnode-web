import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HeaderNavComponent } from './header-nav/header-nav.component';
import { MainSectionAComponent } from './main/sections/main-section-a/main-section-a.component';
import { MainSectionBComponent } from './main/sections/main-section-b/main-section-b.component';
import { MainSectionCComponent } from './main/sections/main-section-c/main-section-c.component';
import { MainSectionDComponent } from './main/sections/main-section-d/main-section-d.component';
import { MainSectionEComponent } from './main/sections/main-section-e/main-section-e.component';
import { MainSectionFComponent } from './main/sections/main-section-f/main-section-f.component';
import { MainSectionGComponent } from './main/sections/main-section-g/main-section-g.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    MainComponent,
    MainSectionAComponent,
    MainSectionBComponent,
    MainSectionCComponent,
    MainSectionDComponent,
    MainSectionEComponent,
    MainSectionFComponent,
    MainSectionGComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
