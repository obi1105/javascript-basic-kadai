const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    const getEmail = document.forms.form1.email.value;
    const getKanji = document.forms.form1.kanji.value;
    const getFurigana = document.forms.form1.furigana.value;
    const getPhone1 = document.forms.form1.phone1.value;
    const getContent = document.forms.form1.content.value;
    const checkbox = document.getElementById('checkbox');

    const errorMessage = document.getElementById('errorMessage');

    errorMessage.innerHTML = '';

    let hasError = false; //エラーがあるかどうかチェックする変数

    const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //メールアドレスの正解パターン
    if(getEmail === ''){
        hasError = true; //エラーあり
        const errorEmail = document.createElement('p');
        errorEmail.textContent = '*メールアドレスを入力してください';
        errorMessage.appendChild(errorEmail);
    } else if (!emailPattern.test(getEmail)){ //メールアドレスが正解パターンでなければ
        hasError = true; //エラーあり
        const emailNg = document.createElement('p'); //エラーメッセージを書くpタグを生成
        emailNg.textContent = '*メールアドレスの入力形式が正しくありません'; //エラーメッセージの内容
        errorMessage.appendChild(emailNg); //子要素として表示
    };

    
    if (getKanji === ''){
        hasError = true; //エラーあり
        const errorName = document.createElement('p');
        errorName.textContent = '*氏名を入力してください';
        errorMessage.appendChild(errorName);   
    };

    if(getFurigana === ''){
        hasError = true; //エラーあり
        const errorFurigana = document.createElement('p');
        errorFurigana.textContent = '*フリガナを入力してください';
        errorMessage.appendChild(errorFurigana);  
    };

    const phone1Pattern =  /^(0\d{1,4}-?\d{1,4}-?\d{4})$/; //電話番号の正解パターン
    if(getPhone1 === ''){
        hasError = true; //エラーあり
        const errorPhone1 = document.createElement('p');
        errorPhone1.textContent = '*電話番号を入力してください';
        errorMessage.appendChild(errorPhone1);  
    } else if (!phone1Pattern.test(getPhone1)){ //電話番号が正解パターンでなければ
        hasError = true; //エラーあり
        const emailNg = document.createElement('p'); //エラーメッセージを書くpタグを生成
        emailNg.textContent = '*メールアドレスの入力形式が正しくありません'; //エラーメッセージの内容
        errorMessage.appendChild(emailNg); //子要素として表示
    };


    if(getContent === ''){
        const errorcontent = document.createElement('p');
        errorcontent.textContent = '*お問い合わせ内容を入力してください';
        errorMessage.appendChild(errorcontent);  
    };

    if(!checkbox.checked){
        hasError = true; //エラーあり
        const errorCheckBox = document.createElement('p');
        errorCheckBox.textContent = '*「同意する」にチェックを入れてください';
        errorMessage.appendChild(errorCheckBox);
    };


    if (hasError) { 
    return; //エラーがあったら止める
    };

    sessionStorage.setItem('getEmail',getEmail); //セッションストレージにメールアドレス欄の値を保存
    sessionStorage.setItem('getKanji',getKanji); //氏名欄の値を保存
    sessionStorage.setItem('getFurigana',getFurigana); //フリガナ欄の値を保存
    sessionStorage.setItem('getPhone1',getPhone1); //電話番号欄の値を保存
    sessionStorage.setItem('getPhone3',getPhone3); //FAX番号欄の値を保存
    
    location.href = 'confirm.html'; //入力確認画面へ遷移
    
});