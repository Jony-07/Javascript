'use strict';

class Product{

    static counterProduct = 0;

    constructor(name, price){
        this._idProduct = ++Product.counterProduct;
        this._name = name;
        this._price = price;
    }

    get idProduct(){
        return this._idProduct;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get price() {
        return this._price;
    }

    set price(price){
        this._price = price;
    }

    toString(){
        return `idProduct: ${this._idProduct}, name: ${this._name}, price: ${this._price}`;
    }

}

class Order{

    static counterOrder = 0;

    static get MAX_PRODUCTS(){
        return 5;
    }

    constructor(){
        this._idOrder = ++Order.counterOrder;
        this._products = [];
        this._counterProductsAdded = 0;
    }

    get idOrder(){
        return this._idOrder;
    }

    addProduct(product){
        if(this._products.length < Order.MAX_PRODUCTS){
            this._products.push(product);
            //this._products[this._counterProductsAdded++] = product;
        }
        else{
            console.log("You cannot add more products.")
        }
    }

    calculateTotal(){
        let total = 0;
        for(let product of this._products){
            total += product.price;
        }
        return total;
    }

    showOrder(){
        let orderProduct = '';
        for(let product of this._products){
            orderProduct += '\n' + product.toString() + ' ';
        }

        console.log(`Order: ${this._idOrder} Total: ${this.calculateTotal()}, Products ${orderProduct}`)
    }
}

let product01 = new Product('Shoes',70);
let product02 = new Product('Glasses',250);
let product03 = new Product('PC',1000);

let order01 = new Order();
order01.addProduct(product01);
order01.addProduct(product02);
order01.addProduct(product03);

order01.showOrder();