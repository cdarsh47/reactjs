import Information from './components/Information';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <div className='profile-parent'>
        <Information/>
        <About/>
        <Interests/>
        <Footer/>
        </div>
      </main>
    </div>
  );
}

export default App;
