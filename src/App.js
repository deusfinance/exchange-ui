import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Web3ReactManager from './components/Web3ReactManager';
import './assets/styles/base.scss';
import { ToastContainer } from 'react-toastify';





function App() {

  return (
    <Suspense fallback={null}>
      <Web3ReactManager>
        <div id="blur-pop"></div>
        <div className="app-body">
          <ToastContainer style={{ width: "450px" }} />
          {/* <Switch> */}
          <h1>DEUS exchange</h1>
          {/* </Switch> */}
        </div>
      </Web3ReactManager>
    </Suspense>
  );
}

export default App;
