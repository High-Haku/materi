import logo from "./logo.svg";
import { useState } from "react";
import ListDigimon from "./components/ListDigimon";
import {
  Link,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import DetailDigimon from './components/DetailDigimon'
import Login from './components/Login'

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="digimon"
          element={isLogin ? <ListDigimon /> : <Navigate to={"/login"} />}
        />
        <Route path="digimon/:id" element={<DetailDigimon />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="digimon">Digimon</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

function Home() {
  return (
    <>
      {/* <Navigate to={"/about"} /> */}
      <h1>Home</h1>
    </>
  );
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

function About() {
  return <h1>About</h1>;
}

export default App;
