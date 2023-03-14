import { IProductResponse } from "./ProductResponse";

export interface ICategoryResponse {
  id: number;
  title: string;
  products: IProductResponse[];
  attributes: string[];
  parentCategory: ICategoryResponse | null;
  childCategory: ICategoryResponse | null;
}
