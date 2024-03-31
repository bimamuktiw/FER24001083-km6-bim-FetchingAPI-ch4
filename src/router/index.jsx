import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import HomePage from "../pages/Home";
import DetailPage from "../pages/Detail";

export default function Routings() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/detail/:id" exact>
        <DetailPage />
      </Route>
    </Switch>
  );
}
