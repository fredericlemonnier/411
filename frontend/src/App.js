import './App.css';
import BreweryList from './components/BreweryList/BreweryList';
import SearchBar from './components/SearchBar/SearchBar';

const brewery = {
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipCode: '10101',
}

const breweries = [
  brewery,
  brewery,
  brewery,
  brewery,
  brewery
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Breweries!</h1>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
