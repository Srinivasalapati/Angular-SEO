import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service'

@Component({
  selector: 'app-inner1',
  templateUrl: './inner1.component.html',
  styleUrls: ['./inner1.component.css']
})
export class Inner1Component implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit() {
    let title= "Inner"
    let desc = " Inner Page"
    this.seoService.updateTitle(title);
    this.seoService.updateDescription(desc);
  }

}
