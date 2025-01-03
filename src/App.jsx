import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/authPages/Login";
import SignUp from "./pages/authPages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="/SignUp" element={<SignUp /> } />
      </Routes>
    </BrowserRouter>
  )
}
