import React from 'react';

import {AppStack} from './src/navigation';
import {withProviders} from './src/shared';

const App = () => {
  return <AppStack />;
};

export default withProviders(App);
