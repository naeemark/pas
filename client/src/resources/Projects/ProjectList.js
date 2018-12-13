import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  ChipField
} from "react-admin";

const CategoryList = props => {
  if (localStorage.userType === "teacher") {
    return (
      <List {...props} pagination={null}>
        <Datagrid>
          <TextField source="name" sortable={false} />
          <ChipField source="category.name" label="Category" sortable={false} />
          <ShowButton />
          <EditButton />
        </Datagrid>
      </List>
    );
  } else {
    return (
      <List
        {...props}
        pagination={null}
        bulkActionButtons={false}
        actions={null}
      >
        <Datagrid>
          <TextField source="name" sortable={false} />
          <ChipField source="category.name" label="Category" sortable={false} />
          <ShowButton />
        </Datagrid>
      </List>
    );
  }
};

export default CategoryList;
