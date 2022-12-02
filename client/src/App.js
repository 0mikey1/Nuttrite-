import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewsFeed from "./components/feed.js";
import Navbar from "./components/navbar.js";
import AboutUs from "./components/AboutUs.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" exact element={<Landing />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/about" exact element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
