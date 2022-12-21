import './App.css';
import Moviebody from './Moviebody';

import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Moviebody />
    </div>
  );
}

export default App;
