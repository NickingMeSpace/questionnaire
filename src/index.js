import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'

import Tests from './components/Test/Tests'
import History from './components/History/History'
import {Adds, AddsEdit, AddsDelete, AddsNew, AddsTemplate} from './components/Adds'
import Profile from './components/Profile/Profile'
import Desktop from './components/Desctop/Desktop'
import NotFound from './components/Common/NotFound'
import {browserHistory, IndexRoute, Route, Router} from 'react-router'

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Desktop}/>
                <Route path='tests' component={Tests}/>
                <Route path='history' component={History}/>
                <Route path='adds' component={AddsTemplate}>
                    <IndexRoute component={Adds}/>
                    <Route path='new' component={AddsNew}/>
                    <Route path='edit' component={AddsEdit}/>
                    <Route path='delete' component={AddsDelete}/>
                </Route>
                <Route path='profile' component={Profile}/>
                <Route path='*' component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)