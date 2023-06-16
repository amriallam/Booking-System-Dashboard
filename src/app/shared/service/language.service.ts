import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private selectedLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('en');
  public selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  setSelectedLanguage(lang: string) {
    this.selectedLanguageSubject.next(lang);
  }

  constructor() { }
}
