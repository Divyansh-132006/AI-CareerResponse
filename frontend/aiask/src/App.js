import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AiResponse from "./pages/airesponse.js";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";



function App() {
  console.log("Deploy fix test");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AiResponse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       

      </Routes>
    </Router>
  );
}

export default App;
