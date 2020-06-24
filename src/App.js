import React from 'react';
import './App.css';
import SignUpPage from './Pages/SignUpPage';
import Navbar from './Components/NavBar';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/üyegirisi" component={LoginPage} />
          <Route path="/kaydol" component={SignUpPage} />
          <Redirect to="/" />
        </Switch>
        
      </BrowserRouter>

     
      

    </div>
    
    
  );
}

export default App;
