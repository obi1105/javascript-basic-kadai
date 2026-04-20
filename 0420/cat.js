const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.getElementById('output-btn');

btn.addEventListener('click', () => {
    fetch(url)
        .then((response) => {
            return response.json();
        })

        .then((data)=> {
        console.log(data);
        const  photourl = data[0].url;
        const width = data[0].width;
        const height = data[0].height;
        const photo = document.createElement('img');
        photo.src = photourl;
        photo.width = width;
        photo.height = height;
        const getDiv = document.getElementById('catPicture');
        getDiv.appendChild(photo);

        })

});

