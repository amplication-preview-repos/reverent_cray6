import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { LinkTitle } from "../link/LinkTitle";

export const MetricEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="link.id" reference="Link" label="Link">
          <SelectInput optionText={LinkTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="totalAccesses" source="totalAccesses" />
      </SimpleForm>
    </Edit>
  );
};
