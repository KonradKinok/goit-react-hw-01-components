import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Title from 'components/SpaceBetweenTasks/SpaceBetweenTasks.jsx';
import * as Zadanie1 from 'components/Profile/Profile.jsx';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title.SpaceBetweenTasks message={'Zadanie 1:'} />
    <Zadanie1.Profile username={'Konrad'} />
  </React.StrictMode>
);
