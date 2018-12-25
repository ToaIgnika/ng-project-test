import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  displayedColumns: string[] = ['status', 'name', 'type', 'resource-group', 'subscription', 'edit'];
  dataSource: any;
  dataDisplay: any;

  searchFilter = "";
  selectFilter = "All subscriptions"

  constructor(dataService: DataService) {
    dataService.getData().subscribe(res => {
      this.dataSource = res['cloud-services'];
      this.dataDisplay = this.dataSource;
    });
  }

  ngOnInit() {
  }

  filterList() {
    if (this.selectFilter === 'All subscriptions') {
      this.dataDisplay = this.dataSource;
    } else {
      this.dataDisplay = this.dataSource.filter(
        item => item.subscription === this.selectFilter
      );
    }
   
    if (this.searchFilter != "") {
      this.dataDisplay = this.dataDisplay.filter(
        item =>
          item.name.includes(this.searchFilter)
        || item.type.includes(this.searchFilter)
        || item['resource-group'].includes(this.searchFilter)
        || item.subscription.includes(this.searchFilter)
      )
    }
  }

  onSearchChange(event: any) {
    this.searchFilter = event;
    this.filterList();
  }

  onSelectChange(event: any) {
    this.selectFilter = event;
    this.filterList();
  }

}
