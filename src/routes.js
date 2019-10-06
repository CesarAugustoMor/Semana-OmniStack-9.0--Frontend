import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashborad from "./pages/Dashborad";
import New from "./pages/New";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact componemt={Login} />
        <Route path="/dashborad" componemt={Dashborad} />
        <Route path="/new" componemt={New} />
      </Switch>
    </BrowserRouter>
  );
}
