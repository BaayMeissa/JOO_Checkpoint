//Creating my Product class with id, name and price
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

//Creating my CartItem class which will extend product and add quantity property
class CartItem extends Product {
    constructor(id, name, price, quantity) {
        //extend all the properties of product
        super(id, name,price);
        this.quantity = quantity;
    }

    calculate (){
        return `Amount to pay: ${this.price*this.quantity}`;
    }
}

//Create a class named ShoppingCartList
class ShoppingCartList{
    constructor() {
        this.items=[];
    }

    totalItems(){
        return `The cart contains ${this.items.length} items`;
    }

    addItems(item){
        this.items.push(item);
        return (`${item.name} has been successfully added`);
    }

    deleteItem(cartItem){
        this.items = this.items.filter((item)=>item!=cartItem);
        return (`${cartItem.name} has been successfully removed`);
    }

    displayItems(){
        let myItems = this.items.map((item)=>item.name);
        return `Items in the cart: ${myItems.join(', ')}`;
    }
}
/* 
1. Testing creation of products
*/
const shoes = new CartItem(1,"Nike Shoes",25000,2);
const shirt = new CartItem(2,"Shirt",12000,4);
const watch = new CartItem(2,"Rolex",15000,1);

/* 
2. Testing creation of shoppingcart
*/
const cart1 = new ShoppingCartList();

/* 
3. Testing adding items to the cart
*/
console.log(cart1.addItems(watch));//A watch will be added and "Rolex has been successfully added" will be loged
cart1.addItems(shirt);
cart1.addItems(shoes);

/* 
3. Testing displaying the cart items
*/
console.log(cart1.displayItems());//will return "Items in the cart: Rolex, Shirt, Nike Shoes"

/* 
3. Testing deleting items of the cart
*/
console.log(cart1.deleteItem(shoes));//Shoes will be removed from the cart and "Nike Shoes has been successfully removed" will be loged.

