// Donot shw api key on your js file
const API_KEY = 'e978b1d1f012fe4b9204aa6e67e1da2f';

const loadTenmerature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url).then(res => res.json()).then(data => displayTemperatuer(data));
}

const displayTemperatuer = data =>{
    // const temperatuer = document.getElementById('temperature');
    // temperatuer.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main)

}

const setInnerTextById = (id, text) =>{
    const temperatuer = document.getElementById(id);
    temperatuer.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(data){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTenmerature(city);
})


loadTenmerature('Dhaka');