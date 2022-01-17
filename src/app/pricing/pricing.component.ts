import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private title:Title , private translate:TranslateService) { }

  ngOnInit(): void {
    this.title.setTitle(`${this.translate.instant('pageTitle')}/${this.translate.instant('Pricing')}`);
  }

}
