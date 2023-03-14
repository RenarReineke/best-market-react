import { Link } from "react-router-dom";
import style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={style.main}>
      <Link className={style["magic-button"]} to={"/products"}>
        Здесь продукты ты найдешь...
      </Link>
      <Link className={style["magic-button"]} to={"/admin"}>
        А здесь сам создать их сможешь...
      </Link>
    </div>
  );
};

export default Navigation;
