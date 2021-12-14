// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for(let i = 0; i < products.length; i++) {
        if(id === products[i].id) {
            cartList.push(products[i]);
            generateCart(products[i]);
        }
    }
    calculateTotal();
    calculateSubtotals();
    
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    console.log("Cart was emptied");
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    let subtotalGrocery = 0;
    let subtotalBeauty = 0;
    let subtotalClothes = 0;
    for(let i = 0; i < cartList.length; i++) {
         let type = cartList[i].type;
         switch (type) {
             case "grocery" :
                 subtotalGrocery++;
                 break;
             case "beauty" :
                 subtotalBeauty++;
                 break;
             case "clothes" :
                 subtotalClothes++;
                 break;
             default :
                 console.log("Cart is empty");
         }
         console.log("Groceries: " + subtotalGrocery + " / " + "Beauty: " + subtotalBeauty + " / " + "Clothes: " + subtotalClothes)
    }
}

// Exercise 4
function calculateTotal() {
    for(let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }
    console.log("Total: " + total);
}

// Exercise 5
function generateCart(product) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let isPresent = false;
    //console.log(product);
    if(cart.length === 0) {
        cart = [{quantity: 1, product: product}];  
    } else {
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id) {
                cart[i].quantity++; // cart[i].quantity = cart[i].quantity +1;
                isPresent = true;
            }    
        }
        if(!isPresent) {
            cart.push({quantity: 1, product: product});
        }

    }
    console.log(cart);        
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let oilDiscount = 0;
    let cupcakeDiscount = 0;

    for(i = 0; i < cart.length; i++) {

    }

}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

     let isPresent = false;
    
    for(let i = 0; i < products.length; i++) {

    }
    if(cart.length === 0 && id === products[i].id) {
        cart = [{quantity: 1, product: products[i]}];  
    } else {
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id) {
                cart[i].quantity++; // cart[i].quantity = cart[i].quantity +1;
                isPresent = true;
            }    
        }
        if(!isPresent) {
            cart.push({quantity: 1, product: product});
        }

    }
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for(let i = 0; i < Cart.length; i++) {
        if(cart[i].product.id === id && cart[i].quantity > 1) {
            cart[i].quantity--;
        } else {
            cart.pop(cart[i]);
        }
    }
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
