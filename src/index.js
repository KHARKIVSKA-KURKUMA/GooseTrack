import { App } from 'components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import 'index.css';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/GooseTrack">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
