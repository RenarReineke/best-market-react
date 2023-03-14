import { ILoginRequest } from "@api/request";
import { AuthService } from "@api/services/AuthService";
import Button from "@sharedUI/Button";
import { FormEvent } from "react";
import { useInput } from "../../hooks/useInput";
import style from "./Form.module.scss";

export const AuthForm = () => {
  const login = useInput({
    isEmptyError: true,
    minValueError: 3,
  });

  const password = useInput({
    isEmptyError: true,
    minValueError: 3,
  });

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    console.log(e.currentTarget.elements[0]);
    e.preventDefault();

    const user: ILoginRequest = {
      name: login.value,
      password: password.value
    };

    AuthService.signIn(user)
      .then((res) => {
        console.log('Пользователь: ', res.data.user);
        console.log('Успешно ли вошел: ', res.data.success);
        console.log(res.data.message);
        console.log('Токен с бэка: ', res.data.token);
      })
      .catch((e) => console.log("Возникла ошибка при попытке войти: ", e))
      .finally(() => {
        login.setValue('');
        password.setValue('');
      });
  };

  return (
    <form className={style.form} onSubmit={(e) => submitHandler(e)}>
      <h3>Войти или создать профиль</h3>
      <div className={style.field}>
        <label htmlFor="login">Логин</label>
        <input
          className={style.input}
          type="text"
          name=""
          id="login"
          placeholder="Логин"
          value={login.value}
          onChange={(e) => login.onChange(e)}
          onBlur={(e) => login.onBlur(e)}
        />
        {login.validators.isEmptyError && login.dirtyValue && (
          <div className={style.error}>Логин не может быть пустым</div>
        )}
        {login.validators.minValueError && login.dirtyValue && (
          <div className={style.error}>Слишком мало символов</div>
        )}
      </div>
      <div className={style.field}>
        <label htmlFor="password">Пароль</label>
        <input
          className={style.input}
          type="password"
          name=""
          id="password"
          placeholder="Пароль"
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
        />
        {password.validators.isEmptyError && password.dirtyValue && (
          <div className={style.error}>Пароль не может быть пустым</div>
        )}
        {password.validators.minValueError && password.dirtyValue && (
          <div className={style.error}>Слишком мало символов</div>
        )}
      </div>
      <Button className={style['form-button']}>Войти</Button>
    </form>
  );
};
