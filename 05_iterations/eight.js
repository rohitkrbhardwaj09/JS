const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, curVal) => {
    console.log(`acc: ${acc} and currentVal: ${curVal}`);
    return acc + curVal    
}, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js Course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 4999
    },
    {
        itemName: 'Data Structure',
        price: 3999
    },
    {
        itemName: 'QA automation',
        price: 7999
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice);