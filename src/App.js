import './App.css';
import {AuthProvider} from "./context/AuthContext";
import {router} from "./router";
import {RouterProvider} from "react-router";
import React from "react";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}  />
    </AuthProvider>
  );
}

export default App;
