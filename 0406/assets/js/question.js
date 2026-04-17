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


    if(getEmail === ''){
        const errorEmail = document.createElement('p');
        errorEmail.textContent = '*メールアドレスを入力してください';
        errorMessage.appendChild(errorEmail);
    };
    
    if (getKanji === ''){
        const errorName = document.createElement('p');
        errorName.textContent = '*氏名を入力してください';
        errorMessage.appendChild(errorName);   
    };

    if(getFurigana === ''){
        const errorFurigana = document.createElement('p');
        errorFurigana.textContent = '*フリガナを入力してください';
        errorMessage.appendChild(errorFurigana);  
    };

    if(getPhone1 === ''){
        const errorPhone1 = document.createElement('p');
        errorPhone1.textContent = '*電話番号を入力してください';
        errorMessage.appendChild(errorPhone1);  
    };

    if(getContent === ''){
        const errorcontent = document.createElement('p');
        errorcontent.textContent = '*お問い合わせ内容を入力してください';
        errorMessage.appendChild(errorcontent);  
    };

    if(!checkbox.checked){
        const errorCheckBox = document.createElement('p');
        errorCheckBox.textContent = '*「同意する」にチェックを入れてください';
        errorMessage.appendChild(errorCheckBox);
    };
});