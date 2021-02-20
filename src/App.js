import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import UserForm from './components/userForm/UserForm'

// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    <>

      <Switch>

        <Route path="/user-form" component={UserForm} />
        {/* <Route path="/" exact component={} /> */}

        <Route render={ () => <h1> Error 404 ! Not found </h1> } />

      </Switch>

    </>
  );
}

export default App;
