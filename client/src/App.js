import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" exact element={<Landing />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
