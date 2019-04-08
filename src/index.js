import React from "react";
import "babel-polyfill";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { AppContainer } from "react-hot-loader";
import createHistory from "history/createBrowserHistory";
import "react-hot-loader/patch";

import App from "./App/Appcontainer";
import rootReducer from "./App/app.root.reducer";

import rootSaga from "./App/app.root.saga";

const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, historyMiddleware)
);
let sagaTask = sagaMiddleware.run(function*() {
  yield rootSaga();
});

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);
if (module.hot) {
  module.hot.accept(rootReducer, () => {
    store.replaceReducer(rootReducer);
  });
  module.hot.accept(rootSaga, () => {
    const getNewSagas = rootSaga;
    sagaTask.cancel();
    sagaTask.done.then(() => {
      sagaTask = sagaMiddleware.run(function*() {
        yield getNewSagas();
      });
    });
  });
  module.hot.accept(App, () => {
    const NextApp = App;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
