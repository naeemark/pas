import React from "react";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import authProvider from "./authProvider";
import Login from "./Login";
import Dashboard from "./Dashboard";
import {
  CategoryList,
  CategoryEdit,
  CategoryCreate,
  CategoryIcon
} from "./resources/Categories";
import {
  ProjectList,
  ProjectEdit,
  ProjectCreate,
  ProjectIcon,
  ProjectShow
} from "./resources/Projects";

import {
  AllocationRequestList,
  AllocationRequestIcon
} from "./resources/AllocationRequests";

import "./App.css";

const dataProvider = simpleRestProvider("/api");

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={Login}
  >
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
      icon={CategoryIcon}
    />
    <Resource
      name="projects"
      list={ProjectList}
      show={ProjectShow}
      edit={ProjectEdit}
      create={ProjectCreate}
      icon={ProjectIcon}
    />
    <Resource
      name="allocationRequests"
      options={{ label: "Allocation Requests" }}
      icon={AllocationRequestIcon}
      list={AllocationRequestList}
    />
  </Admin>
);

export default App;
