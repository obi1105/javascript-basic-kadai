/*
const btn = document.getElementById('getItems'); 

btn.addEventListener('click', () => { 
    const getEmail = document.forms.form1.email.value;
    console.log('メールアドレス:' + getEmail);

    const getKanji = document.forms.form1.kanji.value;
    console.log('氏名:' + getKanji);

    const getFurigana = document.forms.form1.furigana.value;
    console.log('フリガナ:' + getFurigana);

    const getZip1 = document.forms.form1.zip1.value;
    const getZip2 = document.forms.form1.zip2.value;
    console.log('郵便番号:' + getZip1 + '-' + getZip2);

    const getAddress1 = document.forms.form1.address1.value;
    console.log('都道府県:' + getAddress1);

    const getAddress2 = document.forms.form1.address2.value;
    console.log('市区町村:' + getAddress2);

    const getAddress3 = document.forms.form1.address3.value;
    console.log('丁目・番地/建物名・号室:' + getAddress3);

    const getPhone1 = document.forms.form1.phone1.value;
    console.log('電話番号:' + getPhone1);

    const getPhone2 = document.forms.form1.phone2.value;
    console.log('携帯電話番号:' + getPhone2);

    const getPhone3 = document.forms.form1.phone3.value;
    console.log('FAX番号:' + getPhone3);

}); */


const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    const getEmail = document.forms.form1.email.value;
    const getKanji = document.forms.form1.kanji.value;
    const getFurigana = document.forms.form1.furigana.value;
    const getZip1 = document.forms.form1.zip1.value;
    const getZip2 = document.forms.form1.zip2.value;
    const getAddress1 = document.forms.form1.address1.value;
    const getAddress2 = document.forms.form1.address2.value;
    const getAddress3 = document.forms.form1.address3.value;
    const getPhone1 = document.forms.form1.phone1.value;
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

    if(getZip1 === '' || getZip2 === ''){
        const errorZip = document.createElement('p');
        errorZip.textContent = '*郵便番号を入力してください';
        errorMessage.appendChild(errorZip);  
    };

    if(getAddress1 === 'select'){
        const errorAdress1 = document.createElement('p');
        errorAdress1.textContent = '*都道府県を選択してください';
        errorMessage.appendChild(errorAdress1);  
    };

    if(getAddress2 === ''){
        const errorAddress2 = document.createElement('p');
        errorAddress2.textContent = '*市区町村を入力してください';
        errorMessage.appendChild(errorAddress2);  
    };

    if(getAddress3 === ''){
        const errorAddress3 = document.createElement('p');
        errorAddress3.textContent = '*丁目・番地/建物名・号室を入力してください';
        errorMessage.appendChild(errorAddress3);  
    };

    if(getPhone1 === ''){
        const errorPhone1 = document.createElement('p');
        errorPhone1.textContent = '*電話番号を入力してください';
        errorMessage.appendChild(errorPhone1);  
    };

    if(!checkbox.checked){
        const errorCheckBox = document.createElement('p');
        errorCheckBox.textContent = '*「同意する」にチェックを入れてください';
        errorMessage.appendChild(errorCheckBox);
    };
})




