import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'

import Admin from './components/_Admin'
import Genre from './components/_Genre'
import Desctop from './components/Desctop'
import NotFound from './components/NotFound'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Desctop}/>
                <Route path='admin' component={Admin}/>
                <Route path='genre' component={Genre}/>
                <Route path='*' component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)