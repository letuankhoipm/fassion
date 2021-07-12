import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public myName = '';

  constructor() { }

  ngOnInit(): void {
    this.initName();
  }

  public onSubmit(): void {
    const ba = 'abc';
  }

  public initName(): void {
    this.myName = 'Kim Yen';
  }


}
