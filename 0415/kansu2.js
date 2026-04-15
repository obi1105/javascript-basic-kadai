const calculateTax = (price) => {
    return totalPrice = price + ( price * 0.1 );
}

let totalPrice;
totalPrice = calculateTax(1000);
console.log('税込' + totalPrice + '円です');