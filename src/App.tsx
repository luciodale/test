import { WeatherWidget } from "./components/WeatherWidget";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <div>
      <Welcome />
      <div className="widget-container">
        <WeatherWidget />
      </div>
    </div>
  );
}

export default App;
