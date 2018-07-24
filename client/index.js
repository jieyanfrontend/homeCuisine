import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {
    BrowserRouter
} from 'react-router-dom'

const root = document.getElementById('root')
const render = (Component) => {
    ReactDOM.render(
        <BrowserRouter>
            <Component/>
        </BrowserRouter>,
        root
    );
}
render(App)
