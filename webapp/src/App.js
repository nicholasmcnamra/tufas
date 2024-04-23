import './App.css';
import Navbar from './navbar';
import Home from './home';

function App() {
  const title = "welcome to the new block";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
// always export components in order to use in outside files
export default App;
