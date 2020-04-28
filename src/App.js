import React from 'react';
import Header from './common/header';
import { GlobalIconts } from './statices/iconfont/iconfont';
import { Provider } from "react-redux"
import store from "./store"
function App() {
  return (
    <div>
      <GlobalIconts />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
