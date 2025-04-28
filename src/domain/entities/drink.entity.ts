

export const DrinkCategories = [
  'beer',
  'wine',
  'soft drinks',
  'hot drinks',
  'juice',
  'liquor',
];

export class DrinkEntity {
  private readonly _name: string;
  private readonly _category: string;
  private _price: number;
  private _count: number;

  constructor(name: string, category: string, price: number) {
    this._name = name;
    this._category = category;
    this._price = price;
    this._count = 1;
  }

  public increaseCount() {
    this._count++;
  }

  public getTotalPrice() {
    return this._price * this._count;
  }

  public get category() {
    return this._category;
  }

  public get name() {
    return this._name;
  }
}