import style from "./Form.module.scss";
import { CategoryService } from "../../api/services";
import { ICategoryRequest } from "../../api/request";
import { FormEvent, useState } from "react";

export const CreateCategoryForm = () => {
  const [title, setTitle] = useState<string>("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    console.log(e.currentTarget.elements[0]);
    e.preventDefault();

    const data: ICategoryRequest = {
      title,
    };

    CategoryService.create(data)
      .then((res) => console.log("Категория создана!"))
      .catch((e) => console.log("Возникла ошибка при создании категории: ", e))
      .finally(() => setTitle(""));
  };
  return (
    <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
      <label>
        <span className={style.label}>Название</span>
        <input
          name="title"
          placeholder="Название категории"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={style.input}
        />
      </label>
      <button className={style.button}>OK</button>
    </form>
  );
};
