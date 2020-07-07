import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MovieList from './Components/MovieList'
import MovieDetail from './Components/MovieDetail'

function Router(){
  return(
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/detail/:id" component={MovieDetail} /> 
        </Switch>
    </BrowserRouter>
  )
}

export default Router; 