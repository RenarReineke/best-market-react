import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ICategoryResponse } from "@api/response";
import { CategoryService } from "@api/services";
import {
  AuthForm,
  CreateCategoryForm,
  CreateProductForm,
} from "@sharedUI/Form";
import style from "./AdminDashboard.module.scss";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

const AdminDashboard = () => {
  const [categories, setCategories] = useState<ICategoryResponse[]>([]);
  useEffect(() => {
    CategoryService.getAll()
      .then((res) => setCategories(res.data))
      .catch((e) => console.log("Ошибка при запросе категорий: ", e));
  }, []);
  return (
    <div className={style.main}>
      <SideBar categories={categories} />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default AdminDashboard;
