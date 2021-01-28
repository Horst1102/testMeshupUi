import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-detailpage',
    templateUrl: './detailpage.page.html',
    styleUrls: ['./detailpage.page.scss'],
})
export class DetailpagePage implements OnInit {

    constructor(
        public sanitizer: DomSanitizer) {
    }

    ngOnInit() {
    }

    openURL() {
        const url = 'http://172.20.200.1:8080/?urn=08dd7d36-cbef-4c40-a5b4-52a04b1ffb29';
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
