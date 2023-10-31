import {BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Home";
import Roompage from "./Room";
function App() {
  return (
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/room/:roomId" element={<Roompage />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
