import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import ImageComponent from './Image';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <ImageComponent
      imageUrl={
        'https://upload.wikimedia.org/wikipedia/commons/e/ee/Domestic_cat_felis_catus.jpg'
      }
    />
  </StrictMode>
);
