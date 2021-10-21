import {Tariff} from "./tariff.model";

export class CompanyModel {
  public _tariffs: Tariff[] = [];
  public constructor(readonly name: string) {}
  public set tariffs(tariffs: Tariff[]) {
    this._tariffs = tariffs;
  }
  public get tariffs() {
    return this._tariffs;
  }
}

export class CompanyBuilder {
  public static buildAeroflot() {
    const model = new CompanyModel('Аэрофлот')
    model.tariffs = [
      new Tariff({
        name: 'Эконом',
        cost: 4,
        limitWeight: 20,
        overpayCost: 4000,
        overpayWeight: 5,
        discountAge: 0,
        discountPercent: 0,
        overpayByKg: false,
      }),
      new Tariff({
        name: 'Продвинутый',
        cost: 8,
        limitWeight: 50,
        overpayCost: 5000,
        overpayWeight: 20,
        discountAge: 7,
        discountPercent: 30,
        overpayByKg: false
      }),
      new Tariff({
        name: 'Люкс',
        cost: 15,
        limitWeight: 50,
        overpayCost: 5000,
        overpayWeight: Number.MAX_VALUE,
        discountAge: 16,
        discountPercent: 30,
        overpayByKg: false
      })
    ];
    return model;
  }
  public static buildRZD() {
    const model = new CompanyModel('РЖД')
    model.tariffs = [
      new Tariff({
        name: 'Эконом',
        cost: 0.5,
        limitWeight: 50,
        overpayCost: 500,
        overpayWeight: 5,
        discountAge: 5,
        discountPercent: 50,
        overpayByKg: true
      }),
      new Tariff({
        name: 'Продвинутый',
        cost: 2,
        limitWeight: 50,
        overpayCost: 5000,
        overpayWeight: 20,
        discountAge: 8,
        discountPercent: 30,
        overpayByKg: true
      }),
      new Tariff({
        name: 'Люкс',
        cost: 4,
        limitWeight: 60,
        overpayCost: 5000,
        overpayWeight: Number.MAX_VALUE,
        discountAge: 16,
        discountPercent: 20,
        overpayByKg: false
      })
    ];
    return model;
  }

}
