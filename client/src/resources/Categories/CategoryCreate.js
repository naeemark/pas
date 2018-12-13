import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const CategoryCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export default CategoryCreate;
