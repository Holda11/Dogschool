import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoxerDash from "./admin/pages/BoxerDash";
import Dashboard from "./admin/pages/Dashboard";
import DobrmanDash from "./admin/pages/DobrmanDash";
import Login from "./admin/pages/loginPage";
import NovinkyDash from "./admin/pages/NovinkyDash";
import PsyDash from "./admin/pages/PsyDash";
import './App.css';
import Dobrman from "./components/Psy/Dobrman";
import Home from './pages';
import Dogs from "./pages/Dogs";
import Novinky from "./pages/Novinky";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/Novinky" exact element={<Novinky />}/>
        <Route path="/NasiPsy" exact element={<Dogs/>} />
        <Route path="/Login" exact element={<Login />}/>
        <Route path="/Dashboard" exact element={<Dashboard />}/>
        <Route path="/NovinkyDashboard" exact element={<NovinkyDash />}/>
        <Route path="/PsyDashboard" exact element={<PsyDash />}/>
        <Route path="/Boxer" exact element={<BoxerDash />}/>
        <Route path="/DobrmanDash" exact element={<DobrmanDash />}/>
        <Route path="/Dobrman" exact element={<Dobrman />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
