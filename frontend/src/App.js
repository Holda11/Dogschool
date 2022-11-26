import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import Login from "./admin/pages/loginPage";
import NovinkyDash from "./admin/pages/NovinkyDash";
import './App.css';
import Home from './pages';
import Dogs from "./pages/Dogs";
import Novinky from "./pages/Novinky";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/Novinky" exact element={<Novinky />}/>
        <Route path="/NasiPsy" exact element={<Dogs/>}/>
        <Route path="/NasiPsy/:category" element={<Items/>}/>
        <Route path="/Login" exact element={<Login />}/>
        <Route path="/Dashboard" exact element={<Dashboard />}/>
        <Route path="/NovinkyDashboard" exact element={<NovinkyDash />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
