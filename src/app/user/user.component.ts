import { Component, OnChanges, Input } from '@angular/core';
import { UserService} from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements   OnChanges {
  user: any;
  constructor(private userService: UserService) { }
  @Input() spaceXData: any;
  @Input() launchSuccess: any;
  @Input() landSuccess: any;
  @Input() year: any;

  ngOnChanges(): void{
    this.getData();
  }
  getData(): any{
    this.userService.getLaunchSuceess(this.year, this.launchSuccess, this.landSuccess).subscribe((data: any[]) => {
      this.user = data;
      console.log(this.user);
  });

}
}


