import Button from '@sharedUI/Button';
import XMarkIcon from '@sharedUI/icons/XMarkIcon';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.scss'

type ModalProps = {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}

const Modal = ({children, open, onClose}: ModalProps) => {
    if (!open) return null;
    return createPortal(
        <>
            <div className={style.overlay} onClick={onClose}>
            </div>
            <div className={style.modal}>
                <Button onClick={onClose} className={style['modal-button']} >
                    <XMarkIcon/>
                </Button>
                {children}
            </div>
        </>,
        document.getElementById("portal-modal") as HTMLElement
    )
}

export default Modal;