import {ITariffConfig, tariffNames} from "../interfaces/base";

export class Tariff {
  readonly name: tariffNames;
  readonly cost: number;
  readonly limitWeight: number;
  readonly overpayWeight: number;
  readonly overpayCost: number;
  readonly discountAge?: number;
  readonly discountPercent?: number;
  readonly overpayByKg: boolean;
  private _pay: number = 0;
  public get pay() {
    return this._pay;
  }

  constructor(config: ITariffConfig) {
    this.name = config.name;
    this.cost = config.cost;
    this.limitWeight = config.limitWeight;
    this.overpayWeight = config.overpayWeight;
    this.overpayCost = config.overpayCost;
    this.overpayByKg = config.overpayByKg;
    this.discountAge = config.discountAge;
    this.discountPercent = config.discountPercent;
  }

  computeCost(km: number, age: number, weight: number) {
    const cost = km * this.cost;
    const discount = this.computeDiscount(cost, age);
    const overpay = this.computeOverpay(weight);
    this._pay = cost - discount + overpay;
  }

  computeOverpay(weight: number) {
    return this.overpayWeight < weight ? this.overpayCost * (+!this.overpayByKg || weight) : 0;
  }

  computeDiscount(cost: number, age: number) {
    if (this.discountAge && this.discountPercent) {
      return age < this.discountAge ? cost / 100 * this.discountPercent : 0;
    }
    return 0;

  }

  isAvailable(weight: number) {
    return weight < this.limitWeight;
  }
}
