import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import {HashRouter} from 'react-router-dom'
import routes from './routing/routes'
function App() {
  return (
    <HashRouter>

    <Provider store={store}>
{routes}
    </Provider>
    </HashRouter>
  );
}

export default App;
