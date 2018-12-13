import React from "react";

import { Edit, SimpleForm, TextInput } from "react-admin";

const CategoryTitle = ({ record }) => (
  <span>
    {"Name"} &quot;
    {record.name}&quot;
  </span>
);

const CategoryEdit = props => (
  <Edit title={<CategoryTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export default CategoryEdit;
