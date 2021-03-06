import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'audit-portal';

  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
      this.matIconRegistry.addSvgIcon(
        "notification_active",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/notification_active.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "pie_chart_outline",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/pie-chart-outline.svg")
      );
  }
}
