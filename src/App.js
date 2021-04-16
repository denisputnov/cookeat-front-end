import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from './components/mainPage/MainPage';
import RecipiePage from './components/recipiePage/RecipiePage';

class App extends Component {
  return() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/recipie/:id" component={RecipiePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
