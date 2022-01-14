import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from '../../redux';

export const withReduxPersist = (component: () => React.ReactNode) => () =>
  <PersistGate persistor={persistor}>{component()}</PersistGate>;
