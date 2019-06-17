import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "f9bb1bcfaa06ae7ced9c234a1124356f"


class App extends React.Component {

	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		sunrise: undefined,
		sunset: undefined,
		error: undefined

	}



	gettingWeather = async(e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const api_url = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
		const data = await api_url.json();

		if (city) 

		const api_url = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
		const data = await api_url.json();

		var sunset = data.sys.sunset;
		var date = new.Date();
		date.setTime(sunset);
		var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.genSeconds();




		this.setState ({
			temp: data.main.temp,
			city: data.name,
			country: data.sys.country,
			sunrise: data.sys.sunrise,
			sunset: sunset_date,
			error: "" 


		});

	}
}


  render () { 

    return (

    <div>

    
    <Info />
    <Form weatherMethod = {this.gettingWeather}/>
    <Weather
    temp = {this.state.temp}
    city = {this.state.city}
    country = {this.state.country}
    sunrise = {this.state.sunrise}
    sunset = {this.state.sunset}
    error = {this.state.error}

    />

    </div>
    

      );

    }

}

export default App;






