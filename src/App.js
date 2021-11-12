import React from "react";
import RouteNav from "./Router/RouteNav";
import AuthProvider from "./Contexts/AuthProvider";
import {ToastContainer} from "react-toastify";
function App() {
  return (
      <AuthProvider>
          <ToastContainer/>
          <RouteNav></RouteNav>
      </AuthProvider>
  );
}

export default App;
