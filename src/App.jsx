import "./index.css"
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const github = "Github";
  const twitter = "Twitter";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;