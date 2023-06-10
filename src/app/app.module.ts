import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr'

import { Approutes } from './app-routing.module';

import { FullComponent } from './layouts/full.component';
import { NavigationComponent } from './shared/components/header/navigation.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

 
@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(Approutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
