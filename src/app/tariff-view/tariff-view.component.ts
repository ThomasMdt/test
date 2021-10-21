import {Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from "../models/company.model";
import {IFormValue} from "../interfaces/base";
import {Tariff} from "../models/tariff.model";

@Component({
  selector: 'app-tariff-view',
  templateUrl: './tariff-view.component.html',
  styleUrls: ['./tariff-view.component.css']
})
export class TariffViewComponent implements OnInit {
  @Input() public company: CompanyModel | null = null;
  @Input() public set formValue(value: IFormValue | null) {
    if (value) {
      this.tariffs = this.company?.tariffs?.filter(tariff => tariff.isAvailable(value.weight));
      this.tariffs?.forEach(tariff => tariff.computeCost(value.km, value.age, value.weight))
    }

  }
  public tariffs: Tariff[] | undefined = [];
  constructor() {}

  ngOnInit(): void {
  }

}
