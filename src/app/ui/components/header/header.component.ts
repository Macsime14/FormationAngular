import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = 'Chloe\'s app';
  //public title2: string;
  constructor() {
    //this.title2 = 'title2';
  }

  ngOnInit() {
    //this.title2 = 'titre3';
  }

}
