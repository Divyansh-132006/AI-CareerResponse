// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AiResponse from "./pages/airesponse.js";
// import Login from "./pages/login.js";
// import Signup from "./pages/signup.js";



// function App() {
//   console.log("Deploy fix test");

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<AiResponse />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
       

//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AiResponse from "./pages/airesponse.js";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";
import Profile from "./pages/profile.js";
import History from "./pages/History.js";



function App() {


  console.log("Deploy fix: homepage removed");


  return (
    <Router>
      <Routes>
        <Route path="/" element={<AiResponse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/user/history" element={<History />} />


      </Routes>
    </Router>
  );
}

export default App;

