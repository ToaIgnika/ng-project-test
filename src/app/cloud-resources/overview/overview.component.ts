import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  displayedColumns: string[] = ['status', 'name', 'type', 'resource-group', 'subscription'];
  dataSource: any;
  selected = "all";
  constructor(dataService: DataService) {
    dataService.getData().subscribe(res => {
      console.log(res);
      this.dataSource = res['cloud-services']
    });
   }

  ngOnInit() {
  }

  filterList(event : any) {
    console.log(event)
  }

}
