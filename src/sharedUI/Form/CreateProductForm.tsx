import style from "./Form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { title } from "process";
import { ProductService } from "../../api/services/ProductService";
import { IProductRequest } from "../../api/request";

export const CreateProductForm = () => {
  const { register, setValue, handleSubmit } = useForm<IProductRequest>({
    defaultValues: { rating: 0, category: "Книги" },
  });
  const onSubmit: SubmitHandler<IProductRequest> = (data) =>
    ProductService.create(data);
  return (
    <form
      className={style.form}
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <label>
        <span className={style.label}>Название</span>
        <input
          {...register("title", { required: true, maxLength: 10 })}
          className={style.input}
        />
      </label>
      <label>
        <span className={style.label}>Описание</span>
        <input {...register("content")} className={style.input} />
      </label>
      <label>
        <span className={style.label}>Цена</span>
        <input type="number" {...register("price")} className={style.input} />
      </label>
      <label>
        <span className={style.label}>Рейтинг</span>
        <input
          type="number"
          {...register("rating", { min: 0, max: 10 })}
          className={style.input}
        />
      </label>
      <label>
        <span className={style.label}>Категория</span>
        <input {...register("category")} className={style.input} />
      </label>
      <label>
        <span className={style.label}>Изображение</span>
        <input type="file" {...register("image")} className={style.input} />
      </label>
      <button className={style.button}>OK</button>
    </form>
  );
};
