// in src/Dashboard.js
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";

export default () => (
  <Card>
    <Title title="Welcome to Project Allocation System" />
    <CardContent>
      userName: {localStorage.getItem("username")}
      <br />
      userType: {localStorage.getItem("userType")}
    </CardContent>
    <hr />
    <CardContent>Lorem ipsum sic dolor amet...</CardContent>
  </Card>
);
