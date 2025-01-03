import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/authPages/Login";
import SignUp from "./pages/authPages/SignUp";
import Dashbaord from "./components/Dashbaord/Dashbaord";
import DashHome from "./pages/Dashboard/DashHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="/SignUp" element={<SignUp /> } />
        <Route path="/Dashboard/" element={<Dashbaord /> }>
          <Route path="Home" element={<DashHome /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
