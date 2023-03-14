import { Outlet } from "react-router-dom";
import style from "./App.module.scss";
import Navigation from '@sharedUI/Navigation';

function App() {
  return (
    <div className={style.main}>
      <Outlet />
      <h1 className={style.title}>Выбери путь, Нео...</h1>
      <Navigation />
    </div>
  );
}

export default App;
