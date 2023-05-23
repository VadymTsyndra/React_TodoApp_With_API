import { render } from 'react-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/index.scss';

import { App } from './App';
import { LoadDeleteProvider } from './LoadDeleteContext';

render(
  <LoadDeleteProvider>
    <App />
  </LoadDeleteProvider>,
  document.getElementById('root'),
);
