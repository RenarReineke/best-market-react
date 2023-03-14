import React, { useEffect, useState } from "react";
import { IProductResponse } from "@api/response";
import { ProductService } from "@api/services";
import ProductsList from "./components/ProductsList";
import style from "./ProductsPage.module.scss";
import Header from "./components/Header";
import { useSearchParams } from "react-router-dom";

export type Product = {
  id: number;
  title: string;
  content: string;
  price: number;
  rating: number;
  image: string;
  tags: [];
  categories: [];
  comments: [];
  items: [];
  attributeValues: [];
  inStock: boolean;
};

const ProductsPage = () => {
  const [products, setProducts] = useState<IProductResponse[]>([]);
  const [searchParams, setSearchparams] = useSearchParams();

  useEffect(() => {
    ProductService.getAll({ search: searchParams.get("search") })
      .then((res) => setProducts(res.data))
      .catch((e) => console.log(e));
  }, [searchParams]);
  console.log(products);
  return (
    <div className={style.main}>
      <Header />
      <ProductsList products={products} />
    </div>
  );
};

export default ProductsPage;
