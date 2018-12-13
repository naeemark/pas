import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  LongTextInput,
  SelectInput,
  ReferenceInput,
  ArrayInput,
  SimpleFormIterator
} from "react-admin";

const CategoryCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source="name" />

      <LongTextInput
        source="description"
        label="Description (HTML input enabled)"
      />

      <ReferenceInput source="category" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>

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
  </Create>
);

export default CategoryCreate;
