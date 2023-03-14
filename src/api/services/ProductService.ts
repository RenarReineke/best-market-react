import api from "../config";
import { AxiosResponse } from "axios";
import { IProductRequest } from "../request";
import { IProductResponse } from "../response";

export type ParamsType = {
  search?: string | null;
};

export class ProductService {
  static url: string = "/products";

  static getAll(
    params: ParamsType = {} as ParamsType
  ): Promise<AxiosResponse<IProductResponse[]>> {
    console.log("Параметры запроса на бэк: ", params);
    return api(ProductService.url, {
      params,
    });
  }

  static getOne(id: string): Promise<AxiosResponse<IProductResponse>> {
    return api(ProductService.url + `/${id}`);
  }

  static create(product: IProductRequest): Promise<AxiosResponse> {
    return api.post(ProductService.url, product);
  }

  static update(product: IProductRequest, id: string): Promise<AxiosResponse> {
    return api.put(ProductService.url + `/${id}`, product);
  }

  static delete(id: string): Promise<AxiosResponse> {
    return api.delete(ProductService.url + `/${id}`);
  }
}
