class Order {

    items = [];

    constructor(items, totalCost, deliveryAddress, userId) {
        this.items = items;
        this.totalCost = totalCost;
        this.deliveryAddress = deliveryAddress;
        this.userId = userId;
    }

    //set items
    setitems(newItem) {
        return this.items.push(newItem)
    }

}