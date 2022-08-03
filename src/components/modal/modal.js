import './modal.css';
import Button from '../button/button';
import { GrClose } from 'react-icons/gr';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
const Modal = ({ title, isOpen, onCancel, onSubmit, children }) => {
    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                onCancel();
                break;
            default:
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });
    return (
        <>
            {isOpen && (
                <div>
                    <div onClick={onCancel} className="modalOverlay">
                        <div
                            className="modalWindow"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <div className="modalHeader">
                                <div className="modalTitle">{title}</div>
                                <div className="gr-closer" onClick={onCancel}>
                                    <GrClose />
                                </div>
                            </div>
                            <div className="modalBody">{children}</div>
                            <div className="modalFooter">
                                <Button
                                    title="Cancel"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onCancel();
                                    }}
                                ></Button>
                                <Button
                                    style={{ class: 'ad-block-btn-green' }}
                                    title="Submit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onSubmit();
                                    }}
                                ></Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node
};

Modal.defaultProps = {
    title: 'Modal title',
    isOpen: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: null
};

export default Modal;
