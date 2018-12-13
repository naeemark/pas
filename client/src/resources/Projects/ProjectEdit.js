import React from "react";

import {
  Edit,
  SimpleForm,
  TextInput,
  LongTextInput,
  ArrayInput,
  DisabledInput,
  SimpleFormIterator
} from "react-admin";

const CategoryTitle = ({ record }) => (
  <span>
    {"Name"} &quot;
    {record.name}&quot;
  </span>
);

const CategoryEdit = props => (
  <Edit title={<CategoryTitle />} {...props}>
    <SimpleForm redirect="list">
      <TextInput source="name" />

      <LongTextInput
        source="description"
        label="Description (HTML input enabled)"
      />

      <DisabledInput source="category.name" label="Category" />

      <ArrayInput source="tasks" label="Tasks">
        <SimpleFormIterator>
          <TextInput source="text" />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="requiredSkills" label="Required Skills">
        <SimpleFormIterator>
          <TextInput source="text" />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="relatedTechs" label="Related Technologies" allowEmpty>
        <SimpleFormIterator>
          <TextInput source="name" />
          <TextInput source="link" />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="relatedProjects" label="Related Projects" allowEmpty>
        <SimpleFormIterator>
          <TextInput source="name" />
          <TextInput source="link" />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="relatedLinks" label="Related Links" allowEmpty>
        <SimpleFormIterator>
          <TextInput source="name" />
          <TextInput source="link" />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="relatedRepos" label="Related Repo`s" allowEmpty>
        <SimpleFormIterator>
          <TextInput source="name" />
          <TextInput source="link" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default CategoryEdit;
