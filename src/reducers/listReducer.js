

export default function listReducer(state = [], action) {

    switch(action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
            return state.filter(it => it.id !== action.payload);
        case 'EDIT_ITEM':
            return state.map(it => {
                if(it.id === action.payload.id) {
                    return action.payload;
                }
                else {
                    return it;
                }
            });
        case 'CHANGE_DONE':
            return state.map(it => {
                if(it.id === action.payload) {
                    it.done = !it.done;
                }
                return it;
            });
        default:
            return state;
    }
}