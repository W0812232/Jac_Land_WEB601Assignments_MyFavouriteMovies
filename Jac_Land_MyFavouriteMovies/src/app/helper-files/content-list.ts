import { Content } from "./content-interface";

export class ContentList {
    private _items: Content[];
    
    constructor() {
        this._items = [];
    }
    get items(): Content[]{
        return this._items;
    }
    addList(item: Content) {
    this._items.push(item)
    }
    countList() {
    return this._items.length
    }
    display(index: number): string {
        const output = this._items[index];
        const imageTag = output.imgURL ? '<img scr="${output.imgURL}" alt="Image">' : '';

        return  `<h2>${output.title}</h2>
                <p><em>${output.description}<em></p>
                <p>Director: ${output.creator}</p>
                <p>Genre: ${output.type}</p>
                ${imageTag}`;
    }

}