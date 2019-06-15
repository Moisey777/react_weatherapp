import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "f9bb1bcfaa06ae7ced9c234a1124356f"


class App extends React.Component {
  render () { 

    return (

    <div>

    
    <Info />
    <Form />
    <Weather />

    </div>
    

      );

    }

}

export default App;






