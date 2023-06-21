import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { FaqService } from 'src/app/shared/service/faq.service';
import { faq } from '../../models/faq';

@Component({
  selector: 'app-update-add-faq',
  templateUrl: './update-add-faq.component.html',
})
export class UpdateAddFaqComponent implements OnInit {
  plugins:string="anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tableofcontents footnotes mergetags autocorrect typography inlinecss";
  toolbar:string=  'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat';
  faq:faq;
  addFlag:boolean=false;
  constructor(private activeRoute:ActivatedRoute,private faqService:FaqService){
    this.faq={question:"",answer:""};
  }
  ngOnInit(): void {
    if(!this.activeRoute.snapshot.params['id'])
      this.addFlag = true;
    else{
      this.faq=this.faqService.tempfaq
    }
  }

}
