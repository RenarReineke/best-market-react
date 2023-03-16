import Button from "@sharedUI/Button";
import { AuthForm } from "@sharedUI/Form";
import { RegisterForm } from "@sharedUI/Form/RegisterForm";
import CartIcon from "@sharedUI/icons/CartIcon";
import DollarIcon from "@sharedUI/icons/DollarIcon";
import HomeIcon from "@sharedUI/icons/HomeIcon";
import MoonIcon from "@sharedUI/icons/MoonIcon";
import UserIcon from "@sharedUI/icons/UserIcon";
import UsersIcon from "@sharedUI/icons/UsersIcon";
import WrenchIcon from "@sharedUI/icons/WrenchIcon";
import Modal from "@sharedUI/Modal";
import { RootState } from "@store/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./UserPanel.module.scss"

const UserPanel = () => {
    const isLogin = useSelector((state: RootState) => state.user.isLogin)
    const user = useSelector((state: RootState) => state.user.user)
    const [showModal, setShowModal] = useState(false)
    const [showAuthForm, setShowAuthForm] = useState(true)

    const loginHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setShowModal(true);
        console.log('Login go!')
    }

    const profileHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        console.log('Profile go!')
    }

    return <div className={style.main}>
        <div className={style.item}><MoonIcon /> <span>Тема</span></div>
        {isLogin ? <div className={style.item} onClick={(e) => profileHandler(e)}><DollarIcon /> <span>{user}</span></div> : <div className={style.item} onClick={(e) => loginHandler(e)}><UserIcon /> <span>Войти</span></div>}
        <Link className={style.item} to='/cart'><CartIcon /> <span>Корзина</span></Link>
        <Link className={style.item} to='/admin'><UsersIcon /> <span>Админка</span></Link>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
            {showAuthForm ? <AuthForm isOpen={setShowModal}/> : <RegisterForm/>}
            <div className={style['buttons-wrapper']}>
                <Button className={style['auth-check']} onClick={() => setShowAuthForm(false)}>Регистрация</Button>
                <Button className={style['auth-check']} onClick={() => setShowAuthForm(true)}>Вход</Button>
            </div>
        </Modal>
    </div>
}

export default UserPanel;