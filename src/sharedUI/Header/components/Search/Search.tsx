import { ProductService } from "@api/services";
import Button from "@sharedUI/Button";
import SearchIcon from "@sharedUI/icons/SearchIcon";
import Input from "@sharedUI/Input";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Search.module.scss";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    () => searchParams.get("search") as string
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Обрабатывается событие отправки формы: ", e);
    e.preventDefault();
    setSearchParams(() => ({ search: searchValue }));
  };

  return (
    <form className={style.search} onSubmit={(e) => handleSubmit(e)}>
      <Input
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Я ищу..."
      />
      <Button type="submit" className={style["search-button"]}>
        <SearchIcon />
      </Button>
    </form>
  );
};

export default Search;
