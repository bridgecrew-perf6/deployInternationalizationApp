import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-translate-sample';

  constructor(public translate: TranslateService, private titles: Title) {
    this.translate.setDefaultLang('en');
    // this.translate.use(localStorage.getItem('lang') || 'en' );

    // if (localStorage.getItem('lang') || 'ar') {
    //   this.translate.use('ar');
    // } else {
    //   this.translate.use('en');
    // }

    // if (localStorage.getItem('lang') == 'ar') {
    //   this.translate.use('ar');
    // } else {
    //   localStorage.removeItem('ar');
    //   this.translate.use('en');
    // }

    // use it if you want to use english as default language

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event);
      // translate.get('pageTitle').subscribe((res: string) => {
      //   titles.setTitle(res);
      //   console.log(res)
      // });
      console.log(event.translations['pageTitle'])
      titles.setTitle(event.translations['pageTitle'] );
      
    });
    // titles.setTitle(`${this.translate.instant('pageTitle')}`);
  }
}
