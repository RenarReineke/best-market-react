import { ReactElement, useState } from "react";
import { CreateCategoryForm, CreateProductForm } from "@sharedUI/Form";
import style from "./Main.module.scss";

type MainPprops = {
  children: ReactElement | null;
};

const Main = ({ children }: MainPprops) => {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);
  return (
    <div className={style.main}>
      <h3>Админ панель - здесь админы творят чудеса</h3>
      <hr />
      <button
        onClick={() => setShowCategoryForm(!showCategoryForm)}
        style={{ backgroundColor: "greenyellow" }}
      >
        Создать категорию
      </button>
      <button
        onClick={() => setShowProductForm(!showProductForm)}
        style={{ backgroundColor: "red" }}
      >
        Создать продукт
      </button>

      {showCategoryForm && (
        <div className={style["modal-container"]}>
          <div className={style.modal}>
            <CreateCategoryForm />
          </div>
        </div>
      )}
      {showProductForm && (
        <div className={style["modal-container"]}>
          <div className={style.modal}>
            <CreateProductForm />
          </div>
        </div>
      )}
      <hr />
      {children}
    </div>
  );
};

export default Main;
