import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainPage from './components/MainPage/MainPage'
import RecipiePage from './components/RecipiePage/RecipiePage'
import AboutPage from './components/AboutPage/AboutPage'
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <ScrollUpButton />
      <AnimatePresence exitBeforeEnter >
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/recipie/:id" component={RecipiePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
