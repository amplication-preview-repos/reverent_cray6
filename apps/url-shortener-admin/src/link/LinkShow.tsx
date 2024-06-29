import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LINK_TITLE_FIELD } from "./LinkTitle";
import { ACCESSLOG_TITLE_FIELD } from "../accessLog/AccessLogTitle";

export const LinkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="AccessLog"
          source="accesslog.id"
          reference="AccessLog"
        >
          <TextField source={ACCESSLOG_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="expirationDate" source="expirationDate" />
        <TextField label="ID" source="id" />
        <TextField label="originalUrl" source="originalUrl" />
        <TextField label="shortCode" source="shortCode" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AccessLog"
          target="linkId"
          label="AccessLogs"
        >
          <Datagrid rowClick="show">
            <TextField label="browserName" source="browserName" />
            <TextField label="browserVersion" source="browserVersion" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Link" source="link.id" reference="Link">
              <TextField source={LINK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="osName" source="osName" />
            <TextField label="osVersion" source="osVersion" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Metric" target="linkId" label="Metrics">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Link" source="link.id" reference="Link">
              <TextField source={LINK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <TextField label="totalAccesses" source="totalAccesses" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
