import './App.css';
import Home from './Home';
import Header from './Header'
import Footer from './Footer';
import SearchPage from './SearchPage';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/search' element={<SearchPage />} />
          <Route path='/' element={<Home />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
