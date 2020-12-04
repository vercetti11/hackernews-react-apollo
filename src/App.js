import { Route, Switch } from "react-router";
import CreateLink from "./components/CreateLink";
import Header from "./components/Header";
import LinkList from "./components/LinkList";
import "./styles/App.css";

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact patch="/create" component={CreateLink} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
