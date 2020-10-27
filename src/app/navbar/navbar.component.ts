import { Component, ViewChild} from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor() { }
  @ViewChild(UserComponent) userComponent: UserComponent;
  public user: any;
  year: any;
  public state = false;
  public falseState =  false;
  public truelanding = false;
  public falselanding = false;
  launchSuccess: any;
  landSuccess: any;

onClickMe(launchSuccess): any{
  this.state = !this.state;
  if (this.state === true){
    this.launchSuccess = launchSuccess;
  }else{
    this.launchSuccess = undefined;
  }
  this.userComponent.getData();
}

falseLaunch(launchSuccess): any{
  this.falseState  = !this.falseState;
  if (this.falseState){
    this.launchSuccess = launchSuccess;
  }else{
    this.launchSuccess = undefined;
  }
  this.userComponent.getData();
}

trueLand(landSuccess): any{
  this.truelanding = !this.truelanding;
  if (this.truelanding === true){
    this.landSuccess = landSuccess;
  }else{
    this.landSuccess = undefined;
  }
  this.userComponent.getData();
}

falseLand(landSuccess): any{
  this.falselanding  = !this.falselanding;
  if(this.falselanding){
    this.landSuccess = landSuccess;
  }else{
    this.landSuccess = undefined;
  }
  this.userComponent.getData();
}
onClickyear(year): any{
  this.year = year;
  this.userComponent.getData();
}

}
