import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public lat = 10.88323318142246;
  public lng = 106.78177759873071;


  constructor() { }

  ngOnInit(): void {
  }

}
