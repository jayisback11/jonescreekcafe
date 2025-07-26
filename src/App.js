import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import data from "./data.json";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const themeColor = data.theme.color; // your new color
    let metaTag = document.querySelector('meta[name="theme-color"]');

    if (metaTag) {
      metaTag.setAttribute("content", themeColor);
    } else {
      metaTag = document.createElement("meta");
      metaTag.name = "theme-color";
      metaTag.content = themeColor;
      document.head.appendChild(metaTag);
    }
  }, []);
  document.title = data.nav.businessname;
  return (
    <div id="app">
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center"
              style={{ color: data.theme.color }}
            >
              <FontAwesomeIcon icon={faAppleWhole} size="xl" />
              <span className="ms-3 lh-1 fw-semibold">
                {data.nav.businessname}
                <br></br>
                {data.nav.businessname2}
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="text-center" id="basiv-navbar-nav">
            <Nav className="me-auto justify-content-center w-100 ">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="nav-link text-uppercase text-center fw-semibold"
                style={{ color: data.theme.color }}
              >
                Home
              </Link>
              <Link
                to="/menu"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="nav-link text-uppercase text-center fw-semibold"
                style={{ color: data.theme.color }}
              >
                Menu
              </Link>
              <Link
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="nav-link text-uppercase text-center fw-semibold"
                style={{ color: data.theme.color }}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="nav-link text-uppercase text-center fw-semibold"
                style={{ color: data.theme.color }}
              >
                Contact
              </Link>
            </Nav>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button
                type="button"
                className="btn  rounded-sm text-capitalize my-3 my-lg-0 ms-lg-4 text-nowrap"
                style={{
                  backgroundColor: data.theme.color,
                  color: data.theme.text,
                }}
              >
                {data.contact.phone}
              </button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
