import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import OderPage from "./oder";
import CategoryPage from "./category";
import CategoryEdit from "./edit-category";
import ProductPage from "./product";
import ProductEditPage from "./edit-product";
import ReportPage from "./report";
import MembersView from "./membersview";
import MembersEdit from "./membersedit";
import SettingsPage from "./settings";
import ListMem from "./listmember";
import HomePage from "./home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/listoder">
          <OderPage />
        </Route>
        {/* <Route path="/category">
          <CategoryPage />
        </Route> */}
        <Route path="/category/view">
          <CategoryPage />
        </Route>
        <Route path="/categorys/edit">
          <CategoryEdit />
        </Route>
        <Route path="/products/view">
          <ProductPage />
        </Route>
        <Route path="/products/edit">
          <ProductEditPage />
        </Route>
        <Route path="/products">
          <ProductPage />
        </Route>
        <Route path="/report">
          <ReportPage />
        </Route>
        <Route path="/listmember">
          <ListMem />
        </Route>
        <Route path="/members/view">
          <MembersView />
        </Route>
        <Route path="/members/edit">
          <MembersEdit />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
