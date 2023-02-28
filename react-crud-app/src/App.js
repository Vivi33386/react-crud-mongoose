import "./App.css";

//Components
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import CodeforInterview from "./components/CodeforInterview";
import AllUsers from "./components/AllUsers";

import {
  BrowserRouter, 
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CodeforInterview />} />
        <Route path="all" element={<AllUsers />} />
        <Route path="add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
