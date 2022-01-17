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
    // translate.onLangChange.subscribe((event: LangChangeEvent) => {
    //   translate.get('pageTitle').subscribe((res: string) => {
    //      titles.setTitle(res);
    //   });
    // });

  titles.setTitle(
      `${this.translate.instant('pageTitle')}`
    );
  }
}
