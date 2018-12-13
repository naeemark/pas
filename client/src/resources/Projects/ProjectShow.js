import React from "react";
import {
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField,
  ShowController
} from "react-admin";

const Title = ({ record }) => {
  return <span>{record ? `${record.name}` : ""}</span>;
};

const ArrayTextField = ({ record, source }) =>
  record && record[source] && record[source].length ? (
    <ul>
      {record[source].map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  ) : null;
ArrayTextField.defaultProps = { addLabel: true };

const LinkField = ({ record, source }) =>
  record && record[source] && record[source].length ? (
    <ul>
      {record[source].map(item =>
        item.link ? (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ) : (
          <li key={item.id}>{item.name}</li>
        )
      )}
    </ul>
  ) : null;
LinkField.defaultProps = { addLabel: true };

const ProjectShow = props => (
  <ShowController title={<Title />} {...props}>
    {controllerProps => (
      <SimpleShowLayout {...props} {...controllerProps}>
        <TextField source="name" />
        <TextField source="category.name" label="Category" />
        <RichTextField source="description" />

        {controllerProps.record && controllerProps.record.tasks.length && (
          <ArrayTextField source="tasks" label="Tasks" />
        )}

        {controllerProps.record &&
          controllerProps.record.requiredSkills.length && (
            <ArrayTextField source="requiredSkills" label="Required Skills" />
          )}

        {controllerProps.record &&
          controllerProps.record.relatedTechs.length && (
            <LinkField source="relatedTechs" label="Related Technologies" />
          )}
        {controllerProps.record &&
          controllerProps.record.relatedProjects.length && (
            <LinkField source="relatedProjects" label="Related Projects" />
          )}
        {controllerProps.record &&
          controllerProps.record.relatedLinks.length && (
            <LinkField source="relatedLinks" label="Related Links" />
          )}
        {controllerProps.record &&
          controllerProps.record.relatedRepos.length && (
            <LinkField source="relatedRepos" label="Related Repo`s" />
          )}

        <DateField label="Publication date" source="date" />
      </SimpleShowLayout>
    )}
  </ShowController>
);

export default ProjectShow;
