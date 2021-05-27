import { Component, Input, OnInit } from '@angular/core';
import { FaqSuccessResponseType } from 'src/app/features/help/faqs.api.types';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input()
  list!: FaqSuccessResponseType[];

  constructor() {}

  ngOnInit(): void {
    this.list?.forEach((item) => {
      item.isHidden = true;
    });
  }

  toggleSection(index: number): void {
    this.list?.forEach((item, i) => {
      if (i === index) {
        this.list[i].isHidden = !this.list[index].isHidden; // Toggle if it is cuurent item
      } else {
        this.list[i].isHidden = false; // collapse all others
      }
    });
  }
}
