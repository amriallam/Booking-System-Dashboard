import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faq } from '../../models/faq';
import { FaqService } from 'src/app/shared/service/faq.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-faq',
  templateUrl: './list-faq.component.html',
  styleUrls:['./list-faq.component.scss']
})
export class ListFaqComponent implements OnInit {
  faqs: faq[] = []
  @ViewChild("search") search !: ElementRef;
  searchCriteria:boolean = false; //False = Answer , True = Question
  searchTerm: string = "";
  constructor(private faqService:FaqService,private router:Router){}
  ngOnInit(): void {
    this.faqService.GetAll().subscribe(e=>this.faqs=e.data);
  }
  editFaq(faq:faq){
    this.faqService.tempfaq=faq;
    this.router.navigateByUrl(`/faq/edit/${faq.id}`);
  }
  deleteFAQ(faq:faq){
    this.faqService.DeleteById(faq.id!);
  }
  matchesSearchTerm(faq: faq): boolean {
    if (!this.searchTerm)
      return true; // If no search term provided, show all resources
    this.searchTerm = this.search.nativeElement.value.toLowerCase();
    const searchParam = !this.searchCriteria?faq.question.toLowerCase():faq.answer.toLowerCase();
    return searchParam.includes(this.searchTerm); // Check if faq questions/answers includes the search term
  }
}
