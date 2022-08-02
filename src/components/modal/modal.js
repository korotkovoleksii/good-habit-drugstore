import { Portal } from 'react';
import './modal.css';
import Button from '../button/button';
import { GrClose } from 'react-icons/fa';

const Modal = (title, isOpen, onCancel, onSubmit, children) => {
    return (
        <>
            {isOpen && (
                <Portal>
                    <div className="modalOverlay">
                        <div className="modalWindow">
                            <div className="modalHeader">
                                <div className="modalTitle">{title}</div>
                                <div>
                                    <GrClose />
                                </div>
                            </div>
                            <div className="modalBody">{children}</div>
                            <div className="modalFooter">
                                <Button
                                    title="Cancel"
                                    onClick={onCancel}
                                ></Button>
                                <Button
                                    title="Submit"
                                    onSubmit={onSubmit}
                                ></Button>
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
};

export default Modal;
