import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { LinkTitle } from "../link/LinkTitle";

export const AccessLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="browserName" source="browserName" />
        <TextInput label="browserVersion" source="browserVersion" />
        <ReferenceInput source="link.id" reference="Link" label="Link">
          <SelectInput optionText={LinkTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="links"
          reference="Link"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LinkTitle} />
        </ReferenceArrayInput>
        <TextInput label="osName" source="osName" />
        <TextInput label="osVersion" source="osVersion" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
