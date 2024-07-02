class Storage {
    #items;
    constructor(items) {
        this.#items = items
    }

    getItems() {
        return this.#items
    }

    addItem(newItem) {
        if (!this.#items.includes(newItem)) {
            this.#items.push(newItem)
        } else {
            return `Товар "${newItem}" вже є на складі.`
        }
    }
    removeItem(itemToRemove) {
 
    this.#items = this.#items.filter(item => item !== itemToRemove)
}

}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

