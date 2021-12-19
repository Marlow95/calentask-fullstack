import React, {useState, useEffect, useImperativeHandle, forwardRef, useCallback} from 'react';
import { createPortal } from 'react-dom';
import "../css/modal.css"


const modalElement = document.getElementById('modal-root');

export function Modal({ children,  fade = false, defaultValue = false }, ref){
    const [modal, setModal] = useState(defaultValue);
    const close = useCallback(() => setModal(false), [])

    useImperativeHandle(ref, () => ({
        open: () => setModal(true),
        close
    }), [close])

    const handleClose = useCallback(event => {
        if (event.keyCode === 27){
            close()
        } 
    }, [close])

    useEffect(() => {
        if(modal){
            document.addEventListener('keydown', handleClose, false)
        }
        return () => {
            document.removeEventListener('keydown', handleClose, false)
        }
    }, [handleClose, modal])

    return createPortal(
        
        modal ? (
        <div className={`modal ${fade ? 'modal-fade' : ''}`}>
            <div className="modal-overlay" onClick={close} />
            <span role="button" className="modal-close" aria-label="close" onClick={close}>X</span>
            <div className="modal-body">{children}</div>
        </div>
        ) : null, modalElement
    )
}

export default forwardRef(Modal)