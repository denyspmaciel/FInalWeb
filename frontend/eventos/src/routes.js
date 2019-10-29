import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main/main';
import Event from './pages/event/event';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/> 
            <Route path="/events/:id" component={Event}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;