import { Link } from "react-router-dom";
import { ICategoryResponse } from "../../../../../api/response";
import style from "./SideBarItem.module.scss";

type SideBarItemProps = {
  categories: ICategoryResponse[];
};

const SideBarItem = ({ categories }: SideBarItemProps) => {
  return (
    <ul className={style.main}>
      {categories.map((category) => (
        <li key={category.id}>
          <Link to={`${category.id}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SideBarItem;
