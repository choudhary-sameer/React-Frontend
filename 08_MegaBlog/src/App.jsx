import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth.js";
import { login, logout } from "./store/authSlice";
import "./App.css";
import { Header, Footer } from "./components/index";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        userData ? dispatch(login({ userData })) : dispatch(logout(userData));
      }) // include .catch here
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flew-wrap content-between bg-blue-400">
      <div className="w-full block">
        <Header />
        <main>TODO: {/* { <Outlet /> } */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
