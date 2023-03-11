const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eaca5a45a7msh710d3fd17f55476p1e1c5cjsn89ad178f5c3a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
const getWeather = (city) => {
    cityName.innerHTML = city
fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        temp_f.innerHTML = response.current.temp_f
        temp_c.innerHTML = response.current.temp_c
        humidity.innerHTML = response.current.humidity
        cloud.innerHTML = response.current.cloud
        wind_degree.innerHTML = response.current.wind_degree
        wind_dir.innerHTML = response.current.wind_dir

    })
.catch(err => console.error(err));
}

submit.addEventListener('click', (e) => {
    e.defer
    getWeather(city.value)
})

getWeather("Hyderabad")