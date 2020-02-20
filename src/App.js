import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ItemDetails from './components/items/itemDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateItem from './components/items/CreateItems';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path='/item/:id' component={ ItemDetails } />
          <Route path='/signIn' component={ SignIn } />
          <Route path='/signUp' component={ SignUp } />
          <Route path='/createItem' component={  CreateItem }/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
