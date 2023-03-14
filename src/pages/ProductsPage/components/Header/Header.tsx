import Search from "./components/Search";
import UserPanel from "./components/UserPanel";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.nav}>Wildberries</nav>
        <div className={style.search}>
          <Search />
        </div>
        <div className={style.info}>
          <UserPanel />
        </div>
      </div>
    </header>
  );
};

export default Header;
