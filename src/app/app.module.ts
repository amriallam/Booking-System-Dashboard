import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr'

import { Approutes } from './app-routing.module';

import { FullComponent } from './layouts/full.component';
import { NavigationComponent } from './shared/components/header/navigation.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RetryInterceptor } from './shared/utility/retry.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeAr from '@angular/common/locales/ar';

registerLocaleData(localeEn);
registerLocaleData(localeAr);

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
    RouterModule.forRoot(Approutes),
    FontAwesomeModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RetryInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID, 
      useValue: 'en' 
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
