import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";

import Home from "./pages/Home";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};
export default App;
