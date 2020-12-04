import { Route, Switch } from "react-router";
import CreateLink from "./components/CreateLink";
import Header from "./components/Header";
import LinkList from "./components/LinkList";
import Login from "./components/Login";
import Search from "./components/Search";
import "./styles/App.css";

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
