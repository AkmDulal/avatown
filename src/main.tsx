import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Route } from "react-router-dom";
import App from './App.tsx'
import './index.css'
// import Store from './ReduxService/Store.tsx';
import Root from './ReduxService/Root.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root>
      <Route>
        <App />
      </Route>
    </Root>
  </React.StrictMode>,
)
