const arr = [1, 2, 3, 4, 5]
let sum = 0;
const total = arr.reduce(function (sum, next) {
    console.log(`sum: ${sum} and next: ${next}`);
    return sum + next;

});
console.log(`totalValue: ${total}`);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);