import rootReducer from './Reducers';
import { configureStore } from '@reduxjs/toolkit';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const Store = configureStore({
//   reducer: rootReducer
// });

export default (initialState: any) => {
    initialState = JSON.parse(window.localStorage.getItem("state") as any) || initialState;
  // const store = configureStore(
  //   reducer: rootReducer,
  //     initialState,
  // );
  const Store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: true,
  });
  Store.subscribe(() => {
      const state:any = Store.getState();
      window.localStorage.setItem('state', JSON.stringify(state));
  });
  return Store;
}

// export default Store;