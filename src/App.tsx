import { Outlet } from "react-router-dom";
import style from "./App.module.scss";
import Navigation from '@sharedUI/Navigation';
import Header from "@sharedUI/Header";

function App() {
  return (
    <div className={style.main}>
      <Header />
      <div className={style.container}>
        <Outlet />
        <h1 className={style.title}>Выбери путь, Нео...</h1>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
