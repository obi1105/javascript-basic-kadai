const greet = (name) => {
    let hey =  name + 'さん、こんにちは！';
    return hey;
}

let bye;
bye = greet('山田');
console.log(bye);

bye = greet('佐藤');
console.log(bye);