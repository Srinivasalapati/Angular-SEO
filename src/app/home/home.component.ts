import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private seoService: SeoService) { }

  ngOnInit() {
    let title= "Home"
    let desc = " Home Page"
    this.seoService.updateTitle(title);
    this.seoService.updateDescription(desc);
  }

}
