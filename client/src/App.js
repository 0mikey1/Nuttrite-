import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AuthProvider} from "./useAuth";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/user/:username" element={<Profile/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
