import React, { useState } from 'react';
import Card from './Card';
import './styles/Modal.css';

export default function Modal({ children, show, onHideModal }) {

    const hideModal = event => {
        if(event.target.id === "modal") {
            onHideModal();
        }
    }

    return (
        <div id="modal" onClick={hideModal} className={ show ? "Modal" : "Modal hide"}>
            <Card className="cardModal">
                { children }
            </Card>
        </div>
    )
}