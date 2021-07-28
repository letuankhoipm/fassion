import { UserService } from '@services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '@models/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public lat = 10.88323318142246;
  public lng = 106.78177759873071;

  public user: User | undefined;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this._getUser();
  }

  private _getUser(): void {
    this.userService.getUser().subscribe((res: any) => {
      this.user = res[0].data;
      console.log(this.user);
    });
  }

}
