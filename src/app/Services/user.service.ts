import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private teslaCustomAPI: any;

 constructor(private httpClient: HttpClient) {}
 getLaunchSuceess(year, launchSuccess, landSuccess): any{
  this.teslaCustomAPI  = 'https://api.spaceXdata.com/v3/launches?limit=100';
  if (year !== undefined && year){
     this.teslaCustomAPI = this.teslaCustomAPI +  '&launch_year=' + year;
    }
  if (launchSuccess !== undefined){
      this.teslaCustomAPI = this.teslaCustomAPI + '&launch_success=' + launchSuccess;
      }
  if (landSuccess !== undefined){
    this.teslaCustomAPI = this.teslaCustomAPI + '&land_success=' + landSuccess;
  }
  return this.httpClient.get(this.teslaCustomAPI);
   }
   }

