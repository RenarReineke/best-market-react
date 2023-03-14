export interface IProductRequest {
  title: string;
  content?: string;
  price?: number;
  rating?: number;
  image?: Blob;
  tags?: string[];
  category?: string;
}
