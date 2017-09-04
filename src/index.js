import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'

import Tests from './components/Test/Tests'
import History from './components/History/History'
import Adds from './components/Adds/Adds'
import AddsEdit from './components/Adds/Edit'
import AddsDelete from './components/Adds/Delete'
import AddsNew from './components/Adds/New'
import Profile from './components/Profile/Profile'
import Desktop from './components/Desctop/Desktop'
import NotFound from './components/NotFound'
import {browserHistory, IndexRoute, Route, Router} from 'react-router'

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Desktop}/>
                <Route path='tests' component={Tests}/>
                <Route path='history' component={History}/>
                <Route path='adds' component={Adds}/>
                    <Route path='adds/new' component={AddsNew}/>
                    <Route path='adds/edit' component={AddsEdit}/>
                    <Route path='adds/delete' component={AddsDelete}/>
                <Route path='profile' component={Profile}/>
                <Route path='*' component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)