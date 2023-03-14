import Button from "@sharedUI/Button";
import { AuthForm } from "@sharedUI/Form";
import { RegisterForm } from "@sharedUI/Form/RegisterForm";
import CartIcon from "@sharedUI/icons/CartIcon";
import MoonIcon from "@sharedUI/icons/MoonIcon";
import UserIcon from "@sharedUI/icons/UserIcon";
import Modal from "@sharedUI/Modal";
import { useState } from "react";
import style from "./UserPanel.module.scss"

const UserPanel = () => {

    const [showModal, setShowModal] = useState(false)
    const [showAuthForm, setShowAuthForm] = useState(false)

    const loginHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setShowModal(true);
        console.log('Login go!')
    }

    return <div className={style.main}>
        <div className={style.item}><MoonIcon /> <span>Тема</span></div>
        <div className={style.item} onClick={(e) => loginHandler(e)}><UserIcon /> <span>Войти</span></div>
        <div className={style.item}><CartIcon /> <span>Корзина</span></div>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
            {showAuthForm ? <AuthForm/> : <RegisterForm/>}
            <div className={style['buttons-wrapper']}>
                <Button className={style['auth-check']} onClick={() => setShowAuthForm(false)}>Регистрация</Button>
                <Button className={style['auth-check']} onClick={() => setShowAuthForm(true)}>Вход</Button>
            </div>
        </Modal>
    </div>
}

export default UserPanel;