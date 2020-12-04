import CreateLink from "./components/CreateLink";
import LinkList from "./components/LinkList";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <LinkList />
      <CreateLink />
    </div>
  );
}

export default App;
