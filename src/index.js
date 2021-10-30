import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  {DropDownProvider}  from './Contexts/DropDownContext';
import { MultiSelectProvider } from './Contexts/MultiSelectContext';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <MultiSelectProvider>
      <DropDownProvider>
    <App />
    </DropDownProvider>
    </MultiSelectProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



