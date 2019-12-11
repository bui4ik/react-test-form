import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import Main from "./Components/Pages/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store/store";

const App: React.FC = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Main/>
          </BrowserRouter>
      </Provider>
  );
};

export default App;
