import './App.css';
import NavigationBar from './components/Navigationbar';
import Firstbar from './components/Firstbar';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
    
      <div className='main'>
     <NavigationBar/>
     <Firstbar/>
     </div>
    </div>
  );
}

export default App;
