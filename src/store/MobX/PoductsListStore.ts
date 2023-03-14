import { IProductResponse } from "@api/response";
import { makeAutoObservable } from "mobx";

export class ProductsListStore {
  private readonly _productsList: IProductResponse[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setProductsList() {}
}
