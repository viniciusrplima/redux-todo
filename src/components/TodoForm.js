import React, { useState, useEffect } from 'react';
import './styles/TodoForm.css';
import { useDispatch } from 'react-redux';
import { addItem, editItem } from '../actions/listActions';

export default function TodoForm({ onHideModal, editMode, itemEdit }) {

    const dispatch = useDispatch();
    const [text, setText] = useState("");

    useEffect(() => {
        if(editMode) {
            setText(itemEdit.text);
        }
    }, [editMode, itemEdit]);

    const handleChange = event => {
        let t = event.target.value;
        setText(t);
    }

    const onSubmit = event => {
        event.preventDefault();
        if(text) {
            if(editMode) {
                itemEdit.text = text;
                dispatch(editItem( itemEdit ));
            }
            else {
                dispatch(addItem( text ));
            }
            setText("");
            onHideModal();
        }
    }

    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <input className="text-input" type="text" onChange={handleChange} value={text}/>
            <button className="button">+</button>
        </form>
    )
}