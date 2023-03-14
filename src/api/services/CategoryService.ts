import api from "../config";
import { AxiosResponse } from "axios";
import { ICategoryRequest } from "../request";
import { ICategoryResponse } from "../response";

export class CategoryService {
  static url: string = "/categories";

  static getAll(): Promise<AxiosResponse<ICategoryResponse[]>> {
    return api(CategoryService.url);
  }

  static getOne(id: string): Promise<AxiosResponse<ICategoryResponse>> {
    return api(CategoryService.url + `/${id}`);
  }

  static create(Category: ICategoryRequest): Promise<AxiosResponse> {
    return api.post(CategoryService.url, Category);
  }

  static update(
    Category: ICategoryRequest,
    id: string
  ): Promise<AxiosResponse> {
    return api.put(CategoryService.url + `/${id}`, Category);
  }

  static delete(id: string): Promise<AxiosResponse> {
    return api.delete(CategoryService.url + `/${id}`);
  }
}
