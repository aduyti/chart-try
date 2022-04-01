import './App.css';
import MyLineCharts from './Components/Charts/MyLineCharts'
import DataAxios from './Components/DataAxios/DataAxios';
// import { useSpring, animated } from 'react-spring';

function App() {
  // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <div className="App">
      {/* <animated.div style={props}>I will fade in</animated.div> */}
      <h1>React Rechart Axios</h1>
      <MyLineCharts></MyLineCharts>
      <DataAxios></DataAxios>
    </div>
  );
}

export default App;
