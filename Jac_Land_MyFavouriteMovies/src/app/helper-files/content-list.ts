class ContentList {
    private _items: content[];
    constructor(item: content) {
        this._items = [];
    }
    get items(): content[]{
        return this._items;
    }
    

}
function addList(_items: content[]) {
    _items.push()
}
function countList(_items: content[]) {
    return _items.length
}