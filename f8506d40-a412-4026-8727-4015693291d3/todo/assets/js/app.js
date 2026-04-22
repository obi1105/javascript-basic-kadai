const api_url = 'https://rhythmtype.jp/api_obi/api.php/todos';

//一覧取得関数（新規追加したら再読み込みしなくても最新の状態が表示される)
const displayToDo = () => {
    try{
        fetch(api_url, {
        method: "GET" 
        })

        .then((response) => {
            return response.json();
        })

        .then((data) => {
            const oya = document.getElementById('todo-list');
            oya.innerHTML =  ''; //親の中の要素をリセット
            console.log(data);
            for(let i = 0; i < data.length ; i++){ //配列でかえってくるデータを繰り返し処理で取り出し
                const todo = data[i]; 
                
                const li = document.createElement('li'); //liを作る

                const div1 = document.createElement('div'); //divを作る
                div1.textContent = todo.title; //divの中身は取り出したデータのtitleの部分
                li.appendChild(div1); //div1をliの子要素として入れる

                const div2 = document.createElement('div');
                const btn2 = document.createElement('button');
                btn2.textContent = '完了';
                btn2.setAttribute('class', 'toggle-button'); //class属性を設定
                div2.appendChild(btn2);
                li.appendChild(div2);

                const div3 = document.createElement('div');
                const btn3 = document.createElement('button');
                btn3.textContent = '編集';
                btn3.setAttribute('class', 'toggle-button');
                div3.appendChild(btn3);
                li.appendChild(div3);
                //編集ボタンを押したときのイベント処理を追加
                btn3.addEventListener('click', () => {
                    updateTitle(todo);
                })


                const div4 = document.createElement('div');
                const btn4 = document.createElement('button');
                btn4.textContent = '削除';
                btn4.setAttribute('class','toggle-button');
                div4.appendChild(btn4);
                li.appendChild(div4);
                //削除ボタンを押したときのイベント処理を追加
                btn4.addEventListener('click', () => { //一つ一つ取得して設定するのではなくボタンを作った時点でイベントをつける
                    deleteToDo(todo); //削除する関数を呼び出し、データ一件分を引数として渡す
                })


                
                oya.appendChild(li);

            }
        
        })
    } catch(error){
        console.log(error);
    };
}

displayToDo();





//新規追加
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
    
    try{
        const data = document.forms.form1.addtext.value.trim();
        if(data === "") {
            throw new Error('入力フィールドに文字を入力してください');
        }
        fetch(api_url, {
            method: "POST", //新規追加のPOSTメソッド
            headers: {"Content-type" : "applocation/json"}, //JSON形式で送信という指示
            body: JSON.stringify({ //データをJSON形式に変換(オブジェクト→JSON)
                title: data //実際のデータをセット　キー: 値(入力されたデータ)
            })
        })

        .then((response) => {
            return response.json(); //JSON→オブジェクト
        })

        .then((data) => {
            console.log(data);
            displayToDo(); //一覧取得関数の呼び出し
        });
    } catch{
        console.log(error.name);
        console.log(error.message);
        alert(error.message);
    }
});

//削除ボタンを押したときの処理関数
const deleteToDo = (todo) => { //todoデータの一件を引数として受け取る
    //確認の命令を出す
    if(confirm("本当に削除しますか？") === false) return;
    const url = api_url + "/" + todo.id; //引数で受け取ったデータの中のidをつなげる
    try{
        fetch(url,{
            method: "DELETE",
            headers: {"Content-type": "application/json"}
        })
        .then ((response) => {
            console.log(response);
            displayToDo();
        });
    } catch{
        console.log(error.name);
        console.log(error.message);
        alert(error.message);
    }
}


//タイトルを更新する処理関数
const updateTitle = (todo) => {
    const url = api_url + "/" + todo.id; 
    //入力できるポップアップ
    const newTitle = prompt("編集内容を入力してください", todo.title);
    if(newTitle === null) return; //nullのときはキャンセルなので強制終了
    const data = newTitle.trim();
    try{
        fetch(url,{
        method:"PATCH",
        headers: {"Content-Type" : "aplocation/json"},
        body : JSON.stringify({
            title: data
        }) 
        })

        .then((response) => {
            return response.json();
        })

        .then((data) => {
            console.log(data);
            displayToDo();
        });
    } catch {
        console.log(error);
        console.log(error.message);
        alert(error.message);
    }
}