import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState("Home");
  const links = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Open Source", path: "/opensource" },
    { name: "Contact Me", path: "/contact" },
  ];
  return (
    <nav className="flex justify-between items-center">
      <div className="logo">
        <h1 className="text-4xl font-bold">&lt; My Portfolio / &gt;</h1>
      </div>
      <div className="links">
        <ul className="flex">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setActive(link.name)}
                className={active === link.name ? "active-link" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
