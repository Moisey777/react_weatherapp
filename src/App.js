import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "f9bb1bcfaa06ae7ced9c234a1124356f"


class App extends React.Component {
	gettingWeather = async(e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const api_url = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
		const data = await api_url.json();
		console.log(data);
	}


  render () { 

    return (

    <div>

    
    <Info />
    <Form weatherMethod = {this.gettingWeather}/>
    <Weather />

    </div>
    

      );

    }

}

export default App;






