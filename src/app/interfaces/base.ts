type tariffNames = 'Эконом' | 'Продвинутый' | 'Люкс';
export interface IFormValue {
  km: number;
  age: number;
  weight: number;
}
export interface ITariffConfig {
  name: tariffNames;
  cost: number;
  limitWeight: number;
  overpayWeight: number;
  overpayCost: number;
  freeWeight: number;
  discountAge?: number;
  discountPercent?: number;
}
export class Tariff {
  readonly name: tariffNames;
  readonly cost: number;
  readonly limitWeight: number;
  readonly overpayWeight: number;
  readonly overpayCost: number;
  readonly freeWeight: number;
  readonly discountAge?: number;
  readonly discountPercent?: number;
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
    this.freeWeight = config.freeWeight;
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
    return this.overpayWeight < weight ? this.overpayCost : 0;
  }
  computeDiscount(cost: number,age: number) {
    if (this.discountAge && this.discountPercent) {
      return age < this.discountAge ? cost / 100 * this.discountPercent : 0;
    }
    return 0;

  }
  isAvalable(weight: number) {
    return weight < this.limitWeight;
  }
}

