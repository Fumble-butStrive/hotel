import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = "https://mail.google.com/mail/u/0/";
  userName = "USER";
  
  constructor() { }

  ngOnInit(): void {
  }

}
