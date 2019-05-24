import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';

import './index.scss';
import { UsersProvider } from './components/UsersContext';
import { ListsProvider } from './components/ListsContext';

ReactDOM.render(
  <ListsProvider>
    <UsersProvider>
      <Application />
    </UsersProvider>
  </ListsProvider>,
  document.getElementById('root')
);
