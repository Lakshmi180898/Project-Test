import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DesignDrawer from "./Components/DesignDrawer";
import Dashboard from "./Components/Dashboard";
import TrackMap from "./Components/TrackMap";
import Report from "./Components/Report";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <DesignDrawer />
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/trackonmap" element={<TrackMap />} />
          <Route exact path="/report" element={<Report />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
