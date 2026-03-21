import { createRoot } from 'react-dom/client'
import React from 'react'
import { provider } from 'react-redux'
import {store} from './app/store'

createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
        <h1> Hello Raja</h1>
        {/* <App/> */}
    </Provider>
  </React.StrictMode>
)
