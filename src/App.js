import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      Hi!
      <PersonCard firstName="John" lastName="Vega" age={32} hairColor="black"/>
      <PersonCard firstName="Bert" lastName="Gil" age={51} hairColor="brown"/>
      <PersonCard firstName="Richard" lastName="Lewis" age={38} hairColor="brown"/>
      <PersonCard firstName="Thomas" lastName="Williams" age={38} hairColor="brown"/>
    </div>
  );
}

export default App;
