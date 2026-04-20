const url ='https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json';

const btn = document.getElementById('output-btn');



const getList = document.getElementById('list1');

btn.addEventListener('click', () => {
    fetch(url)
        .then((response) => {
            return response.json();
        })

        .then((data)=> {
        const weather = data[0].timeSeries[0].areas[0].weathers[1];
        const wind = data[0].timeSeries[0].areas[0].winds[1];
        const wave = data[0].timeSeries[0].areas[0].waves[1];
        console.log('東京の明日の天気：' + weather);
        console.log('東京の風速：'+ wind);
        console.log('東京の波：' + wave);

        const showWave = document.createElement('li');
        showWave.innerHTML = `<span class="label">波：</span>${wave}`;
        getList.appendChild(showWave);
        

        const showWeather = document.createElement('li');
        showWeather.innerHTML = `<span class="label">天気：</span>${weather}`;
        getList.appendChild(showWeather);

        const showWind = document.createElement('li');
        showWind.innerHTML = `<span class="label">風：</span>${wind}`;
        getList.appendChild(showWind);

       }) 


})


