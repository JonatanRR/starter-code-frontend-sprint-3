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
        if(id===(i+1)) {
            cartList.push(products[i]);
        }
    }
    console.log(cartList);     
}


// Exercise 2
function cleanCart() {
    cartList.length = 0;
    console.log(cartList);
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    var subtotalPriceGrocery = 0;
    var subtotalPriceBeauty = 0;
    var subtotalPriceClothes = 0;
//Activate these line code just for exercise 3. And deactivate the following one activate it.
/*    for (let i = 0; i < cartList.length; i++) {
        if(cartList[i].type === "grocery"){
            var priceGrocery = cartList[i].price;
            subtotalPriceGrocery = subtotalPriceGrocery + priceGrocery;
            subtotal.grocery.value = subtotalPriceGrocery;
            cartList[i].subtotal = subtotalPriceGrocery;
        } else if(cartList[i].type === "beauty") {
            var priceBeauty = cartList[i].price;
            subtotalPriceBeauty = subtotalPriceBeauty + priceBeauty;
            subtotal.beauty.value = subtotalPriceBeauty;
            cartList[i].subtotal = subtotalPriceBeauty;
        } else {
            var priceClothes = cartList[i].price;
            subtotalPriceClothes = subtotalPriceClothes + priceClothes;
            subtotal.clothes.value = subtotalPriceClothes;
            cartList[i].subtotal = subtotalPriceClothes;
        }
    }
    console.log(subtotal, cartList);*/
//Deactivate these line code for exercise 3. And activate for exercise 7.
    for (let i = 0; i < cart.length; i++) {
        if(cart[i].type === "grocery"){
            var priceGrocery = cart[i].price;
            subtotalPriceGrocery = subtotalPriceGrocery + priceGrocery;
            subtotal.grocery.value = subtotalPriceGrocery;
            cart[i].subtotal = subtotalPriceGrocery;
        } else if(cart[i].type === "beauty") {
            var priceBeauty = cart[i].price;
            subtotalPriceBeauty = subtotalPriceBeauty + priceBeauty;
            subtotal.beauty.value = subtotalPriceBeauty;
            cart[i].subtotal = subtotalPriceBeauty;
        } else {
            var priceClothes = cart[i].price;
            subtotalPriceClothes = subtotalPriceClothes + priceClothes;
            subtotal.clothes.value = subtotalPriceClothes;
            cart[i].subtotal = subtotalPriceClothes;
        }
    }
    console.log(subtotal, cart);
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    for(let categ in subtotal) {
        var categNumber = parseFloat(`${subtotal[categ].value}`); //change String value to a number with parseFloat.
        total = total + categNumber;
    }
    console.log(total);
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for(let i = 0; i < cartList.length; i++) {
        var found = false;
        for(let j = 0; j < cart.length; j++) {
            if(cartList[i] == cart[j]) {
                found = true;
            }
        }
        if(!found) {
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
        } else {
            cartList[i].quantity = parseInt(cartList[i].quantity) + 1;
        }
    }
    console.log(cart);
} 

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for(let i = 0; i < cart.length; i++) {
        if(cart[i].id === 1) {
            if(cart[i].quantity >= 3) {
                cart[i].subtotalWithDiscount = parseInt(cart[i].quantity) * 10;
            } 
        } else if(cart[i].id === 3) {
            if(cart[i].quantity >= 10) {
                cart[i].subtotalWithDiscount = parseInt(cart[i].quantity) * (parseInt(cart[i].price) * 2 / 3);
            }
        }
    }
    console.log(cart);
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    for(let i = 0; i < products.length; i++) {
        var found = false;
        if(id ===(i+1)) {
            for(let j = 0; j < cart.length; j++) {
                if(cart[j] === products[i]) {
                    found = true;
                }
            }
            if(!found) {
                products[i].quantity = 1;
                cart.push(products[i]);
            } else {
                products[i].quantity = parseInt(products[i].quantity) + 1;
            }
            calculateSubtotals();
            calculateTotal();
            applyPromotionsCart();
        }
    }
    console.log(cart);
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for(let i = 0; i < cart.length; i++) {
        if(cart[i].id === id) {
            if(cart[i].quantity > 1) {
                var total = parseInt(cart[i].quantity) - 1;
                cart[i].quantity = total;
            } else {
                var position = cart.indexOf(i);
                cart.splice(position, 1);
            }
        }
    }
    console.log(cart);
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
