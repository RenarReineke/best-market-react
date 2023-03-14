import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProductResponse } from "@api/response";
import { ProductService } from "@api/services";
import style from "./CategoryDetailPage.module.scss";
import { url as baseUrl } from "@api/config";

const CategoryDetailPage = () => {
  const params = useParams();
  const [products, setProducts] = useState<IProductResponse[]>([]);
  console.log("Страница продуктов одной категории", products);
  useEffect(() => {
    ProductService.getAll()
      .then((res) => setProducts(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <h3>Страница продуктов одной категории</h3>
      <div className={style.main}>
        {products.map((product) => (
          <div className={style.row} key={product.title}>
            <div className={style.column}>
              <img
                className={style.image}
                src={`${baseUrl + "/" + product.image}`}
                alt={product.title}
                width="122"
                height="50"
              />
            </div>
            <div className={style.column}>{product.title}</div>
            <div className={style.column}>{product.price}</div>
            <div className={style.column}>{product.rating}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryDetailPage;
