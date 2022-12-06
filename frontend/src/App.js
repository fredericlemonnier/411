import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BreweryList from './components/BreweryList/BreweryList.js';
import Navbar1 from './components/Navbar1/Navbar1.js';


function App() {
  return (
    <div className="App">
      <Navbar1 />
      <header className="App-header">
      {/* <header className="App-header">
        <SearchBar />
      </header> */}
      
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<SearchBar/>} />
            
          <Route exact path="/details" element={<BreweryList/>} />
            
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
