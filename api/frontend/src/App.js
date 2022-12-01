import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import Login from "./admin/pages/loginPage";
import NovinkyDash from "./admin/pages/NovinkyDash";
import PsyDash from "./admin/pages/PsyDash";
import './App.css';
import Home from './pages';
import AboutUs from "./pages/AboutUs";
import Dogs from "./pages/Dogs";
import DogsCategory from "./pages/DogsCategory";
import DogsProfile from "./pages/DogsProfile";
import Kontakt from "./pages/Kontakt";
import Novinky from "./pages/Novinky";
import NovinkyArticle from "./pages/NovinkyArticle";
import Trainers from "./pages/Trainers";
import Uploading from "./Tests/uploading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/Novinky"  element={<Novinky />}/>
        <Route path="/Novinky/:title" element={<NovinkyArticle/>}/>
        <Route path="/NasiPsy"  element={<Dogs/>} />
        <Route path="/NasiPsy/:category" element={<DogsCategory/>}/>
        <Route path="/:category/Profile/:name" element={<DogsProfile/>}/>
        <Route path="/Treneri"  element={<Trainers />}/>
        <Route path="/Onas"  element={<AboutUs />}/>
        <Route path="/Kontakt"  element={<Kontakt />}/>
        <Route path="/Test"  element={<Uploading />}/>
        <Route path="/Login"  element={<Login />}/>
        <Route path="/Dashboard"  element={<Dashboard />}/>
        <Route path="/NovinkyDashboard"  element={<NovinkyDash />}/>
        <Route path="/PsyDashboard"  element={<PsyDash />}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
