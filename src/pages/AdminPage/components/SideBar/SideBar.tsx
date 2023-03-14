import { useState } from "react";
import { Link } from "react-router-dom";
import { ICategoryResponse } from "../../../../api/response/CategoryResponse";
import style from "./SideBar.module.scss";

type SideBarProps = {
  categories: ICategoryResponse[];
};

enum SideBarEnum {
  dashboard = "Dashboard",
  categories = "Categories",
  products = "Products",
  attributes = "Attributes",
  users = "Users",
}

const SideBar = ({ categories }: SideBarProps) => {
  const [showCategories, setShowCategories] = useState(false);
  return (
    <div className={style.main}>
      <ul className={style.group}>
        <li className={style.part}>{SideBarEnum.dashboard}</li>
        <hr />
        <li
          className={style.part}
          style={{ color: `${showCategories ? "rgb(74, 88, 93)" : ""}` }}
          onClick={() => setShowCategories(!showCategories)}
        >
          <span className={`${showCategories ? style["part-title"] : ""}`}>
            {SideBarEnum.categories}
          </span>
          {showCategories && (
            <ul className={style.submain}>
              {categories.map((category) => (
                <li key={category.id} className={style.subpart}>
                  <Link to={`${category.id}`}>{category.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className={style.part}>{SideBarEnum.products}</li>
        <li className={style.part}>{SideBarEnum.attributes}</li>
        <hr />
        <li className={style.part}>{SideBarEnum.users}</li>
      </ul>
    </div>
  );
};

export default SideBar;
