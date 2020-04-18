import React, {Fragment} from 'react';
import {Container} from "reactstrap";

import Routes from "./Routes";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <Fragment>
        <ToastContainer autoClose={2000} />
        <header>
          <Toolbar/>
        </header>
        <Container style={{marginTop: '20px'}}>
          <Routes />
        </Container>
      </Fragment>
  );
}

export default App;


