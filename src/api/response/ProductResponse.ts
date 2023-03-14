import { ICategoryResponse } from "./CategoryResponse";

export interface IProductResponse {
  id: number;
  title: string;
  content?: string;
  price: number;
  rating: number;
  image?: string;
  tags?: string[];
  category?: ICategoryResponse;
  attributesValue?: [];
  inStock: boolean;
}
