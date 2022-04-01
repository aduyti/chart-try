import './App.css';
import MyLineCharts from './Components/Charts/MyLineCharts'
import DataAxios from './Components/DataAxios/DataAxios';

function App() {
  return (
    <div className="App">
      <h1>React Rechart Axios</h1>
      <MyLineCharts></MyLineCharts>
      <DataAxios></DataAxios>
    </div>
  );
}

export default App;
