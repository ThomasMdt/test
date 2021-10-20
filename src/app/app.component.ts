import { Component } from '@angular/core';
import {CompanyBuilder} from "./models/company.model";
import {IFormValue} from "./interfaces/base";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public aeroflot = CompanyBuilder.buildAeroflot();
  public rzd = CompanyBuilder.buildRZD();
  public formValue: IFormValue | null = null;
  constructor() {};
  public compute($event: IFormValue) {
    this.formValue = $event;
  }
}
