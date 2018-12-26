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
  opened: boolean = true;
  
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    ) {
   
   }

  ngOnDestroy(): void {
    //this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
