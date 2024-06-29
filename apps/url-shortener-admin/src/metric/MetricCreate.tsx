import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { LinkTitle } from "../link/LinkTitle";

export const MetricCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="link.id" reference="Link" label="Link">
          <SelectInput optionText={LinkTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="totalAccesses" source="totalAccesses" />
      </SimpleForm>
    </Create>
  );
};
