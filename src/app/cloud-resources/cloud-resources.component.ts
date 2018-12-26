import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-cloud-resources',
  templateUrl: './cloud-resources.component.html',
  styleUrls: ['./cloud-resources.component.scss']
})

export class CloudResourcesComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  email : any = "";
  notification : boolean = false;
  
  opened: boolean = true;
  

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    dataService: DataService
    ) {
      this.mobileQuery = media.matchMedia('(max-width: 768px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
     
      this.opened = !this.mobileQuery.matches;

      this.mobileQuery.onchange = () => {
        this.opened = !this.mobileQuery.matches;
      }

      dataService.getData().subscribe(res => {
        this.email = res['email'];
        this.notification = res['notification'];
      });
  
    
      //console.log(this.mobileQuery.matches);
   }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
