import './App.css';
import React from 'react';
import CountUp from 'react-countup';
import Navbar from './components/Navbar.js'

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
          <h2>Background Info</h2>
          <p>Columbia City is a diverse neighborhood in Seattle, Washington with a long history. In 1891, an electric railway line was built, which ran through the area, and the surrounding land was developed into a town. After World War II, the neighborhood was in poor conditions, but public and private contributions revitalized Columbia City. Minority groups and other citizens settled in the area and helped the business district grow and thrive. The neighborhood earned the Landmark District status in 1978 and continues to preserve its historic commercial and residential buildings while making room for more public establishments and community events.</p>
          <h2>Diversity</h2>
         
          <div className="flex-diversity">
            <div className="child">
            <DisplayCounter group="White " finalValue ="32" decimalCount ="0" />
            </div>
            <div className="child">
            <DisplayCounter group="Asian " finalValue = "27.4" decimalCount ="1"/>
            </div>
            <div className="child">
            <DisplayCounter group="African American " finalValue = "26" decimalCount ="0"/>
            </div>
            <div className="child">
            <DisplayCounter group="Hispanic or Latino " finalValue = "6.7" decimalCount ="1"/>
            </div>
            <div className="child">
            <DisplayCounter group="Native Hawaiian + Pacific Islander " finalValue = "2.1" decimalCount ="1"/>
            </div>
            <div className="child">
            <DisplayCounter group="American Indian + Alaska Native " finalValue = "0.4" decimalCount ="1"/>
            </div>
            <div className="child">
            <DisplayCounter group="Two or more races " finalValue = "5.4" decimalCount ="1"/>
            </div>
            <div className="child">
            <DisplayCounter group="Some other race " finalValue = "0.1" decimalCount ="1"/>
            </div>
          </div>
        </div>
        
    </div>
  );
}

function DisplayCounter(props) {
  return <CountUp
  start={0}
  end={props.finalValue}
  duration={5}
  separator=""
  decimals={props.decimalCount}
  decimal="."
  prefix={props.group}
  suffix="% "
  enableScrollSpy ="true"
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}>
  {({ countUpRef, start }) => (
  <div>
    <span ref={countUpRef}/>
  </div>
)}
</CountUp>
}
export default App;
