import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import Login from "./admin/pages/loginPage";
import NewNews from "./admin/pages/newNews";
import NovinkyDash from "./admin/pages/NovinkyDash";
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
        <Route path="/Login" exact element={<Login />}/>
        <Route path="/Dashboard" exact element={<Dashboard />}/>
        <Route path="/NovinkyDashboard" exact element={<NovinkyDash />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
