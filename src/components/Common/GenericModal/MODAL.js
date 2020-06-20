
import React from 'react';
import './modal.css';

const MODAL = ({ handleClose, show, children }) => {
    // debugger
    const showHideClassname = show ? "mymodal display-block" : "mymodal display-none";

    return (
        <div className={showHideClassname}>        
            <section className="modal-main">
                {children}
            </section>
        </div>
    );
}
 
export default MODAL;