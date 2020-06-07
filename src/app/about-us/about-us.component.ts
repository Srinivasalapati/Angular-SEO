import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service'
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  totalAngularPackages:any
  constructor(private seoService: SeoService, private http: HttpClient) { }

  ngOnInit() {
    // let title= "About Us"
    // let desc = " About Page"
    // this.seoService.updateTitle(title);
    // this.seoService.updateDescription(desc);
    this.http.get<any>('https://reqres.in/api/users/2').subscribe(data => {
      console.log(data, "222222")
    this.totalAngularPackages = data.data;
   })
  }

}
