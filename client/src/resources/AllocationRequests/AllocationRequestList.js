import React from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";

const AllocationRequestList = props => (
  <List {...props} pagination={null} title="Allocation Requests">
    <Datagrid>
      <TextField source="id" sortable={false} />
      <EditButton />
    </Datagrid>
  </List>
);

export default AllocationRequestList;
