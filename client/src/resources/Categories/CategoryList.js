import React from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";

const CategoryList = props => {
  if (localStorage.userType === "teacher") {
    return (
      <List {...props} pagination={null}>
        <Datagrid>
          <TextField source="name" sortable={false} />
          {localStorage.userType === "teacher" && <EditButton />}
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
        </Datagrid>
      </List>
    );
  }
};

export default CategoryList;
