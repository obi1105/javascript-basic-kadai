const calculateTotal = (price) => {
    let shipFee = 0;

    if(price >= 5000){
        shipFee = 0;
    }

    else if(price >= 3000){
        shipFee = 300;
    }

    else if(price < 3000){
        shipFee = 500;
    }
    return price + shipFee;
}

const totalPrice =calculateTotal(2000);
console.log('合計金額は' + totalPrice + '円です');
