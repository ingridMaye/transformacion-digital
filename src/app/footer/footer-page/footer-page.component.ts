import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {
   video:any;
   results:any;
  constructor(
    private _sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {
  }
  getVideoIframe(url:any) {
  
 
    if (url === null) {
        return '';
    }
    this.results = url.match('[\\?&]v=([^&#]*)');
    this.video   = (this.results === null) ? url : this.results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video);   
}


}
