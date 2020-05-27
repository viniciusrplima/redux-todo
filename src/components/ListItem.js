import React from 'react';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { changeDone, removeItem } from '../actions/listActions';
import './styles/ListItem.css';

function DoneImg({ done }) {

    if( done ) {
        return (<img src={"./tick-inside-circle-green.png"} />);
    }
    else {
        return (<img src={"./tick-inside-circle.png"} />);      
    }
}

export default function ListItem({ item, onEditItem }) {

    const dispatch = useDispatch();

    return (
        <div className="ListItem">
            <Card className="card" key={ item.id }>
                <p className={ item.done ? "caption done" : "caption" }>{ item.text }</p>
                <div className="button-set">
                    <button onClick={ () => {dispatch(changeDone( item.id ))} }>
                        <DoneImg done={ item.done } />
                    </button>
                    <button onClick={ () => onEditItem( item ) }>
                        <img src="./pencil-edit-button.png" />
                    </button>
                    <button onClick={ () => {dispatch(removeItem( item.id ))} }>
                        <img src="./recycle-bin.png" />
                    </button>
                </div>
            </Card>
        </div>
    )
}