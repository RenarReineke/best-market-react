import { IProductResponse } from "@api/response";
import ProductCard from "@sharedUI/ProductCard";
import style from "./ProductsList.module.scss";

type ProductsListProps = {
  products: IProductResponse[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className={style.main}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
