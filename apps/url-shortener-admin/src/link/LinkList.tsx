import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCESSLOG_TITLE_FIELD } from "../accessLog/AccessLogTitle";

export const LinkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Links"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
