import Feed from "./Feed";
import Header from "./Header";
import Rightside from "./Rightside";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
    <Header/>
    <div className="app__body">
      <Sidebar/>
      <Feed/>
      <Rightside/>
    </div>
    </div>
  );
}

export default App;
