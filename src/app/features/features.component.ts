import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  constructor(private translate: TranslateService, private title: Title) {
    // translate.onLangChange.subscribe((event: LangChangeEvent) => {
    //   translate.get('pageTitle').subscribe((res: string) => {
    //     //  titles.setTitle(res);
    //     title.setTitle(`${res}/${this.translate.instant('Features')}`);
    //   });
    // });
  }

  ngOnInit(): void {
    // this.translate.get('pageTitle').subscribe((res: string) => {
    //   this.title.setTitle(res);
    // });
    // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    //   this.translate.get('pageTitle').subscribe((res: string) => {
    //   //  titles.setTitle(res);
    //   this.title.setTitle(`${res}/${this.translate.instant('Home')}`);
    //   });
    // });

    this.title.setTitle(`${this.translate.instant('pageTitle')}/${this.translate.instant('Features')}`);
  }
}
