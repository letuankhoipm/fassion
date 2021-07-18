import { EmailRegisComponent } from './../../modals/email-regis/email-regis.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isShow = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public onMenu(): void {
    this.isShow = !this.isShow
  }

  onEmailRegis(): void {
    this.modalService.open(EmailRegisComponent, { size: 'lg', centered: true })
  }

}
