export type tariffNames = 'Эконом' | 'Продвинутый' | 'Люкс';
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
  overpayByKg: boolean;
  discountAge?: number;
  discountPercent?: number;
}

