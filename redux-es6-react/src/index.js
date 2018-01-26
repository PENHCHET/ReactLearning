import { render } from 'react-dom';
import React from 'react';
import Users from './containers/users';
import { Provider } from 'react-redux';
import UserStore from './store';
import { BrowserRouter, Route } from 'react-router-dom';

render(
    <Provider store={UserStore}>
        <BrowserRouter>
            <div>
                <Route component={Users} />
                <Route path='/users' component={Users} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)