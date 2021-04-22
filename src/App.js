import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from './components/mainPage/MainPage'
import RecipiePage from './components/recipiePage/RecipiePage'
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollUpButton />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/recipie/:id" component={RecipiePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
