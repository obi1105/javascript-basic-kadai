/* 課題②：複数人のプロフィールを出力しよう*/
const users = [
    {name: "佐藤", age: 25},
    {name: "山田", age: 30},
    {name: "鈴木", age: 22},
    {name: "田中", age: 38}
];

for ( let i = 0; i < users.length; i++){
    if(users[i].age >= 25){
        console.log(users[i].name + 'さんは' + users[i].age + '歳なので、25歳以上です');
    }
}