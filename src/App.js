import React from "react";
import { Routes  , Route} from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
    <Header/>
      <Routes>
      <Route path=""/>
      </Routes>
    </>
  );
}

export default App;
