import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import InvalidRoute from './components/InvalidRoute';
import Search  from './components/Search';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/search/:searchText"
                    component={Search} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home"
                    component={Home}></Route>
                <Route path="/movie/:imdbID"
                    component={MovieDetail}></Route>
                <Route component={InvalidRoute} />
            </Switch>
        </BrowserRouter>
    );

}


export default App;
