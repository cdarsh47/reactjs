import logo from './logo.svg';
import './App.css';
import Travel from './Travel';
import data from './data';

function App() {
  const travel_cities=data.map((details)=>{
    return (
      <Travel {...details}/>
    )
  });
  return (
    <div className='main_div'>
      <header>
        <h2>My Travel Journal</h2>
      </header>
      {travel_cities}
    </div> 
  );
}

export default App;
