import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function Navbar() {
  return (
    <div className="nav">
      <div className="container navInner">
        <Link className="badge" to="/" style={{ textDecoration: "none" }}>
          Donghyun Lee
        </Link>

        <div className="navLinks">
          <a href="/#projects">Projects</a>
          <a href="/#skills">Skills</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
