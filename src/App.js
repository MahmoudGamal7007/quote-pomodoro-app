import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import PomodoroPage from './entities/pages/Pomodoro.page';
import QuotesPage from './entities/pages/Quotes.page';
import IndexPage from './entities/pages/Index.page';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route eacxt path="/quotes" component={QuotesPage} />
        <Route eacxt path="/pomodoro" component={PomodoroPage} />
        <Route eacxt path="/" component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
