import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LINK_TITLE_FIELD } from "../link/LinkTitle";

export const AccessLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AccessLogs"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
