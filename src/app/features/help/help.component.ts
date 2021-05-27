import { Component, OnInit } from '@angular/core';
import { PortalContent } from '../../content.constants';
import { HttpClient } from '@angular/common/http';
import { FaqSuccessResponseType } from './faqs.api.types';


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  content = PortalContent.HELP;
  questions!: FaqSuccessResponseType[];
  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.getFaq();
  }

  getFaq(): void {
    this.httpClient.get('assets/mocks/faqs.json').subscribe((res: any) => {
      this.questions = res;
    });
  }
}
