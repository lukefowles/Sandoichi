class Order {

    items = [];

    constructor(totalCost, deliveryAddress, userId) {
        this.totalCost = totalCost;
        this.deliveryAddress = deliveryAddress;
        this.userId = userId;
    }

    //add new Item to item list
    addItem(newItem) {
        return this.items.push(newItem)
    }

}