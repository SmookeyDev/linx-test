import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app';
import './static/css/index.css';
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from 'swr';
import { createToast, destroyAllToasts } from 'vercel-toast';
import 'vercel-toast/dist/vercel-toast.css';

ReactDOM.render(
  <SWRConfig 
    value={{
      onError: (error) => {
          createToast(`Error: ${error.message}`, {
            type: 'error',
          });
      },
      onSuccess: () => {
          destroyAllToasts();
      },
      shouldRetryOnError: false,
    }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SWRConfig>,
  document.getElementById('root')
);
