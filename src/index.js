import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.scss"
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import "./locales"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);


