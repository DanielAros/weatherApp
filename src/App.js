import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import CardWeather from './components/CardWeather/CardWeather';
import CardMoreInfo from './components/CardMoreInfo/CardMoreInfo';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <SearchInput/>
      </header>
      <div className='container-info'>
        <CardWeather/>
        <CardMoreInfo/>
      </div>
    </div>
  );
}

export default App;
