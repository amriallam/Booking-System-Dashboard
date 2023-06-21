import { Component, OnInit } from '@angular/core';
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
}
