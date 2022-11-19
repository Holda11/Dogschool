import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewNews from "./admin/pages/newNews";
import './App.css';
import Home from './pages';
import Novinky from "./pages/Novinky";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/Novinky" exact element={<Novinky />}/>
        <Route path="/NewNews" exact element={<NewNews />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
