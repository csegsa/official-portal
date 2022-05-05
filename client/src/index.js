import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// styles
import 'bootstrap/scss/bootstrap.scss'
import 'assets/scss/paper-kit.scss?v=1.3.0'
import 'assets/demo/demo.css?v=1.3.0'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
