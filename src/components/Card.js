import React from 'react';
import './styles/Card.css';

export default function ListItem({ className, children }) {

    return (
        <div className={ className ? `${ className } Card` : "Card" }>
            { children }
        </div>
    )
}