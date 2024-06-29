import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AccessLogList } from "./accessLog/AccessLogList";
import { AccessLogCreate } from "./accessLog/AccessLogCreate";
import { AccessLogEdit } from "./accessLog/AccessLogEdit";
import { AccessLogShow } from "./accessLog/AccessLogShow";
import { MetricList } from "./metric/MetricList";
import { MetricCreate } from "./metric/MetricCreate";
import { MetricEdit } from "./metric/MetricEdit";
import { MetricShow } from "./metric/MetricShow";
import { LinkList } from "./link/LinkList";
import { LinkCreate } from "./link/LinkCreate";
import { LinkEdit } from "./link/LinkEdit";
import { LinkShow } from "./link/LinkShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"URLShortener"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AccessLog"
          list={AccessLogList}
          edit={AccessLogEdit}
          create={AccessLogCreate}
          show={AccessLogShow}
        />
        <Resource
          name="Metric"
          list={MetricList}
          edit={MetricEdit}
          create={MetricCreate}
          show={MetricShow}
        />
        <Resource
          name="Link"
          list={LinkList}
          edit={LinkEdit}
          create={LinkCreate}
          show={LinkShow}
        />
      </Admin>
    </div>
  );
};

export default App;
