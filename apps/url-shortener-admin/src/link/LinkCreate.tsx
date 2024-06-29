import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AccessLogTitle } from "../accessLog/AccessLogTitle";
import { MetricTitle } from "../metric/MetricTitle";

export const LinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="accessLog.id"
          reference="AccessLog"
          label="AccessLog"
        >
          <SelectInput optionText={AccessLogTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="accessLogs"
          reference="AccessLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccessLogTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="expirationDate" source="expirationDate" />
        <ReferenceArrayInput
          source="metrics"
          reference="Metric"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MetricTitle} />
        </ReferenceArrayInput>
        <TextInput label="originalUrl" source="originalUrl" />
        <TextInput label="shortCode" source="shortCode" />
      </SimpleForm>
    </Create>
  );
};
