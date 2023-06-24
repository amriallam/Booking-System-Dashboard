import { LanguageService } from './../../service/language.service';
import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/component/models/user';
import { CreateResourceTypeComponent } from 'src/app/component/resource-types/create-resource-type/create-resource-type.component';
import { CreateResourceComponent } from 'src/app/component/resources/create-resource/create-resource.component';
import { CreateServiceComponent } from 'src/app/component/service/create-service/create-service.component';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() toggleLanguages = new EventEmitter<string>();

 user:User=new User("userID", "ZienabHesham100", "Zienab", "Hesham", "Zienab.hesham199@gmail.com", "Almansoura", "01024258847",  new Date());


  public showSearch = false;

  constructor(private modal: NgbModal,
              private userService: UserService,
              private router: Router,
              public translate: TranslateService,
              private languageService: LanguageService) {
    translate.addLangs(['en', 'ar']);
    // translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.languageService.setSelectedLanguage(lang);
  }

  // This is for Notifications
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      btn: 'btn-warning',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/user1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/user2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/user2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/user4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }

  public languages: any[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'Español',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'Français',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'German',
    code: 'de',
    icon: 'de'
  }]

  changeLanguage(language: string) {
    this.toggleLanguages.emit(language);
  }

  createService(){
    const modelRef = this.modal.open(CreateServiceComponent, { centered: true });
  }
  createResourceType() {
    const modelRef = this.modal.open(CreateResourceTypeComponent, { centered: true });
  }
  createResource() {
    const modelRef = this.modal.open(CreateResourceComponent, { centered: true });
  }

  logout() {
    localStorage.removeItem('toke');
    this.router.navigateByUrl('/login');
  }

  ngAfterViewInit() { }
}
