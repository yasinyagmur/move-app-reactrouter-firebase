import React, {  useContext } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MovieDetails from "../pages/MovieDetails";
import Register from "../pages/Register";

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  const PrivateRouter = () => {
    return currentUser ? <Outlet /> : <Navigate to="/login" replace/>;
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id"  element={<PrivateRouter />}>
            <Route path=""element={<MovieDetails />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
