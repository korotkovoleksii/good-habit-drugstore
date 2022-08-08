import Button from '../button/button';
import { GrClose } from 'react-icons/gr';
import PropTypes from 'prop-types';
import { useEffect, Children, isValidElement, cloneElement } from 'react';
// import Portal from '../portal/portal';
import { CSSTransition } from 'react-transition-group';
import './modal.css';

const Modal = ({
    title,
    isOpen,
    onCancel,
    // onSubmit,
    children,
    btnTextCancel
    // btnTextSubmit
}) => {
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
        return () => {
            document.removeEventListener('keydown', keydownHandler);
        };
    });
    const childrenWithProps = Children.map(children, (child) => {
        // Checking isValidElement is the safe way and avoids a typescript
        // error too.
        if (isValidElement(child)) {
            return cloneElement(child, { onCancel });
        }
        return child;
    });

    // if (!isOpen) return null;

    return (
        <CSSTransition
            in={isOpen}
            timeout={1000}
            classNames="modalWindow"
            unmountOnExit
            appear
        >
            {/* <Portal> */}
            <>
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
                    <div className="modalBody">{childrenWithProps}</div>
                    <div className="modalFooter">
                        <Button
                            title={btnTextCancel}
                            onClick={(e) => {
                                e.preventDefault();
                                onCancel();
                            }}
                        ></Button>
                        {/* <Button
                            style={{
                                class: 'ad-block-btn-green'
                            }}
                            title={btnTextSubmit}
                            onClick={(e) => {
                                e.preventDefault();
                                onSubmit();
                            }}
                        ></Button> */}
                    </div>
                </div>
                <div onClick={onCancel} className="modalOverlay" />
            </>
            {/* </Portal> */}
        </CSSTransition>
    );
};
Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
    btnTextCancel: PropTypes.string,
    btnTextSubmit: PropTypes.string
};

Modal.defaultProps = {
    title: 'Modal title',
    isOpen: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: null,
    btnTextCancel: 'Cancel',
    btnTextSubmit: 'Submit'
};

export default Modal;
