import BottomNav from './components/BottomNav';
import Home from './components/Home';
import Navbarcom from './components/Navbarcom';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbarcom/>
      <Home/>
      <BottomNav/>
    </div>
  );
}

export default App;
