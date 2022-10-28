import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Context from './context/Context';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Context>
    <BrowserRouter>
      <StrictMode>
        <ColorModeScript />
        <App />
      </StrictMode>
    </BrowserRouter>
  </Context>
);

