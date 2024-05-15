import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./global/Store";
import { Router } from "./router/mainRouter";

function App() {
  let persistor = persistStore(store);
  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <RouterProvider router={Router} />
        </Provider>
      </PersistGate>
    </>
  );
}

export default App;
