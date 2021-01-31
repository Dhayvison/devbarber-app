import * as React from 'react';

import {initialState, UserReducer} from './reducers/UserReducer';

export const UserContext = React.createContext();

export default ({children}) => {
  const [state, dispatch] = React.useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};
