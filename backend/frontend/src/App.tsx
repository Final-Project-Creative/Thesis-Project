import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer/Footer.js';
// import SignUp from './Component/SignUp/SignUp.js'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

// {/* <PhoneInput
//   country={'us'}
//   value={this.state.phone}
//   onChange={phone => this.setState({ phone })}
// /> */}



function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      <header className="App-header">
        <h1>RAWNAQ.COM</h1>
        <img id ='img' src="https://image.freepik.com/free-vector/shopping-online-website-mobile-application-landing-page-concept-marketing-digital-marketing_144352-77.jpg"  alt="" />
      </header>
      <div>
      <Footer></Footer>
      
      </div>
      
    </div>
   
   
    
  );
}

export default App;
