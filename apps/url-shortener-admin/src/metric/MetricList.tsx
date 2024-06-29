import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LINK_TITLE_FIELD } from "../link/LinkTitle";

export const MetricList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Metrics"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
