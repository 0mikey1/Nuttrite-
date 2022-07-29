import Landing from "./pages/Landing";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" exact element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
