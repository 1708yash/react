import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Home from './pages/Home.jsx'

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Login/>
    </div>
  );
}

export default App;
