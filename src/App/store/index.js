import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import createReducer from "./reducer";
import rootSaga from "./rootSaga";

export default function configureAppStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [sagaMiddleware];
  const store = configureStore({
    // reducer: persistedReducer,
    reducer: createReducer(),
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        thunk: false,
        immutableCheck: false,
        serializableCheck: false,
      }),
      ...middlewares,
    ],
  });
  sagaMiddleware.run(rootSaga);
  return store;
}
