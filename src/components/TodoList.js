import React from 'react';
import './styles/TodoList.css';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

export default function TodoList({ onEditItem }) {

    const items = useSelector(state => state);

    return (
        <div className="TodoList">
            { items.map( item => (
                <ListItem 
                    key={ item.id }
                    item={ item }
                    onEditItem={ onEditItem }
                />
            ))}
        </div>
    )
}