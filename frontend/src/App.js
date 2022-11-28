import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import Login from "./admin/pages/loginPage";
import NovinkyDash from "./admin/pages/NovinkyDash";
import PsyDash from "./admin/pages/PsyDash";
import './App.css';
import Onas from "./components/Onas/OnasBasic";
import DogsVycet from "./components/Psy/DogVycet";
import Profile from "./components/Psy/Profile";
import Home from './pages';
import Dogs from "./pages/Dogs";
import Novinky from "./pages/Novinky";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/Novinky"  element={<Novinky />}/>
        <Route path="/NasiPsy"  element={<Dogs/>} />
        <Route path="ListDog/:category" element={<DogsVycet/>}/>
        <Route path="/:category/Profile/:name" element={<Profile/>}/>
        <Route path="/Onas"  element={<Onas />}/>
        <Route path="/Login"  element={<Login />}/>
        <Route path="/Dashboard"  element={<Dashboard />}/>
        <Route path="/NovinkyDashboard"  element={<NovinkyDash />}/>
        <Route path="/PsyDashboard"  element={<PsyDash />}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
