import { Component } from '@angular/core';
import { Role } from '../../models/role';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/language.service';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
})
export class ListRolesComponent {

  Roles: Role[];
  constructor( private languageService: LanguageService,
              public translate: TranslateService){
                
    this.languageService.selectedLanguage$.subscribe(lang => {
      this.translate.use(lang);
    });

    this.Roles = [
      { id: 1, name: "Admin" },
      { id: 2, name: "User" },
      { id: 3, name: "Assistant" }
    ];
  }


}
