import React from 'react';
import { Provider } from 'react-redux';

import Store from './Store';

interface RootProps {
  children: any;
  initialState?: any;
}

const Root: React.FC<RootProps> = ({ children, initialState = {} }) => (
  <Provider store={Store(initialState)}>{children}</Provider>
);

export default Root;
