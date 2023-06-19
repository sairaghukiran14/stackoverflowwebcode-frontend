import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Registration from "./components/Registration";
import Feedpage from "./components/Feedpage";
import Companies from "./components/Companies";
import Myprofile from "./components/Myprofile";
import IndividualQuestion from "./components/IndividualQuestion";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Registration} />
          <Route path="/login" Component={Login} />
          <Route path="/registration" Component={Registration} />
          <Route path="/feedpage" Component={Feedpage} />
          <Route path="/questions" Component={Feedpage} />
          <Route path="/individualquestion" Component={IndividualQuestion} />
          <Route path="/companies" Component={Companies} />
          <Route path="/myprofile" Component={Myprofile} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
