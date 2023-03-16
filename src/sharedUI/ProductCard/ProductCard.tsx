import { Link } from "react-router-dom";
import { IProductResponse } from "../../api/response";
import style from "./ProductCard.module.scss";
import { url as baseUrl } from "@api/config";
import StarIcon from "@sharedUI/icons/StarIcon";
import DollarIcon from "@sharedUI/icons/DollarIcon";
import HeartIcon from "@sharedUI/icons/HeartIcon";
import Button, { ButtonStyle } from "@sharedUI/Button";
import HandTumbDown from "@sharedUI/icons/HandTumbDown";
import HandTumbUp from "@sharedUI/icons/HandTumbUp";

const ProductCard = ({
  id,
  title,
  content,
  price,
  rating,
  image,
  inStock,
}: IProductResponse) => {
  const starsList = [...Array(5)];
  const handleClickRating = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    index: number
  ) => {
    e.stopPropagation();
    alert(index);
    console.log("Выбран рейтинг: ", index);
  };
  return (
    <div className={style.main}>
      <Link className={style.link} to={`/products/${id}`}>
        <img
          className={style.image}
          src={`${baseUrl + "/" + image}`}
          alt={title}
        />

        <div className={style.info}>
          <div className={style.price}>
            <span>{price}</span>
            <DollarIcon />
          </div>
          <div className={style.title}>{title}</div>
          <div className={style.content}>{content}</div>
          <div className={style.rating}>
            {starsList.map((_, index) => (
              <StarIcon
                key={index}
                filled={index < rating ? true : false}
                onClick={(e) => handleClickRating(e, index)}
              />
            ))}
          </div>
          <div className={style.stock}>{inStock}</div>
        </div>
      </Link>

      <HandTumbUp className={style["likes-up"]} />

      <HeartIcon className={style.favorites} />

      <div className={style.addon}>
        <Link to='/cart'>
          <Button buttonStyle={ButtonStyle.primary}>
            В корзину
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
