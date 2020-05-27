
const LAST_ID = 'savedLastId';

export default class Item {

    static lastId = 0;

    constructor(text) {
        if(Item.lastId === 0)
            Item.lastId = this.loadLastId();

        this.id = Item.lastId++;
        this.text = text;
        this.done = false;

        console.log(this.id);
        this.saveLastId(Item.lastId);
    }

    loadLastId() {
        const lastId = JSON.parse(localStorage.getItem(LAST_ID));

        if(lastId)
            return lastId;
        else
            return 0;
    }

    saveLastId( lastId ) {
        localStorage.setItem(LAST_ID, JSON.stringify(lastId));
    }
}