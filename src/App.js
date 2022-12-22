import './App.css';
import Moviebody from './Moviebody';
import Btn from './Component/Btn';
import { Navbar } from './Navbar';
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Moviebody />
      <div className="btn">
        <Btn />
      </div>
    </div>
  );
}

export default App;
