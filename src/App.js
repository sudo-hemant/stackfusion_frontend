import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import UserForm from './components/userForm/UserForm'
import SubmittedForms from './components/submittedForms/SubmittedForms'
import NavBar from './components/navBar/NavBar'
import MainPage from './components/MainPage'
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    <>
      <NavBar />
      
      <Switch>

        <Route path="/" exact component={MainPage} />
        <Route path="/user-form" component={UserForm} />
        <Route path="/submitted-forms" component={SubmittedForms} />

        <Route render={ () => <h1> Error 404 ! Not found </h1> } />

      </Switch>

    </>
  );
}

export default App;
