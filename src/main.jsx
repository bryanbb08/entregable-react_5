import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
// import redux
import { Provider } from 'react-redux'
// import router
import { HashRouter } from 'react-router-dom'
import store from './store/index'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
   
    
  </React.StrictMode>
)
