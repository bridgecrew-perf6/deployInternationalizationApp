import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private translate: TranslateService, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle(
      `${this.translate.instant('pageTitle')}/${this.translate.instant('Home')}`
    );
  }
}
