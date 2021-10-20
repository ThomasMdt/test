import { Tariff } from "../interfaces/base";

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
        freeWeight: 5,
        overpayCost: 4000,
        overpayWeight: 5,
        discountAge: 0,
        discountPercent: 0
      }),
      new Tariff({
        name: 'Продвинутый',
        cost: 8,
        limitWeight: 50,
        freeWeight: 20,
        overpayCost: 5000,
        overpayWeight: 20,
        discountAge: 7,
        discountPercent: 30
      }),
      new Tariff({
        name: 'Люкс',
        cost: 15,
        limitWeight: 50,
        freeWeight: Number.MAX_VALUE,
        overpayCost: 5000,
        overpayWeight: Number.MAX_VALUE,
        discountAge: 16,
        discountPercent: 30
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
        freeWeight: 15,
        overpayCost: 500,
        overpayWeight: 5,
        discountAge: 5,
        discountPercent: 50
      }),
      new Tariff({
        name: 'Продвинутый',
        cost: 2,
        limitWeight: 50,
        freeWeight: 20,
        overpayCost: 5000,
        overpayWeight: 20,
        discountAge: 8,
        discountPercent: 30
      }),
      new Tariff({
        name: 'Люкс',
        cost: 4,
        limitWeight: 60,
        freeWeight: Number.MAX_VALUE,
        overpayCost: 5000,
        overpayWeight: Number.MAX_VALUE,
        discountAge: 16,
        discountPercent: 20
      })
    ];
    return model;
  }

}
