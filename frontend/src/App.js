import React, { Fragment } from "react";
import ControlBar from "./components/ControlBar";
import ToolList from "./components/ToolList";
import { useAuth0 } from "./react-auth0-spa";
import "./App.css";
import axios from 'axios';

const App = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    loading,
    token
  } = useAuth0();

  if (loading) {
    return <span>Loading...</span>;
  }
  
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return (
    <div className="App container">
      {isAuthenticated && (
        <Fragment>
          <h1>VUTTR</h1>
          <h2>Very Useful Tools to Remember</h2>
          <ControlBar />
          <ToolList />
        </Fragment>
      )}
      {!isAuthenticated && loginWithRedirect()}
    </div>
  );
};

export default App;
