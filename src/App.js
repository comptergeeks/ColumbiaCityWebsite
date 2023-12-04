import './App.css';

import Navbar from './components/Navbar.js'
import Tech from "./Tech.js"

function App() {
  return (
    <div className="frame">
        <Navbar/>
        <h1>Welcome to Columbia City</h1>
        <div className="container2">
          <ul className="imagesfr">
            <li><img src='./images/image-3.png' alt=''/></li>
            <li><img src='./images/image-2.png' alt=''/></li>
            <li><img src='./images/image-1.png' alt=''/></li>
          </ul>
          <h2>Click the links above to find out more!</h2>
        </div>
        
    </div>
  );
}

export default App;
