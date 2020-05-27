
import Item from '../classes/Item';


export function addItem( text ) {
    return ({ 
        type: 'ADD_ITEM', 
        payload: new Item(text)
    });
}

export function removeItem( id ) {
    return ({
        type: 'REMOVE_ITEM', 
        payload: id
    });
}

export function editItem( item ) {
    return ({
        type: 'EDIT_ITEM', 
        payload: item
    });
}

export function changeDone( id ) {
    return ({
        type: 'CHANGE_DONE', 
        payload: id
    });
}