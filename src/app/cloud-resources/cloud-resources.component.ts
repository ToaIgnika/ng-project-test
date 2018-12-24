import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/table';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-cloud-resources',
  templateUrl: './cloud-resources.component.html',
  styleUrls: ['./cloud-resources.component.scss']
})

export class CloudResourcesComponent implements OnDestroy {
  displayedColumns: string[] = ['status', 'name', 'type', 'resource-group', 'subscription'];
  dataSource: any;
  mobileQuery: MediaQueryList;
  selected = "all";
  fillerNav = Array.from({ length: 4 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 4 }, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    dataService: DataService) {
    dataService.getData().subscribe(res => {
      console.log(res);
      this.dataSource = res['cloud-services']
    });
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }



}
