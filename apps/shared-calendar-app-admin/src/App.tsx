import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { TeamMemberList } from "./teamMember/TeamMemberList";
import { TeamMemberCreate } from "./teamMember/TeamMemberCreate";
import { TeamMemberEdit } from "./teamMember/TeamMemberEdit";
import { TeamMemberShow } from "./teamMember/TeamMemberShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { CalendarIntegrationList } from "./calendarIntegration/CalendarIntegrationList";
import { CalendarIntegrationCreate } from "./calendarIntegration/CalendarIntegrationCreate";
import { CalendarIntegrationEdit } from "./calendarIntegration/CalendarIntegrationEdit";
import { CalendarIntegrationShow } from "./calendarIntegration/CalendarIntegrationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"SharedCalendarApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="TeamMember"
          list={TeamMemberList}
          edit={TeamMemberEdit}
          create={TeamMemberCreate}
          show={TeamMemberShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="CalendarIntegration"
          list={CalendarIntegrationList}
          edit={CalendarIntegrationEdit}
          create={CalendarIntegrationCreate}
          show={CalendarIntegrationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
