import { NavLink } from "react-router-dom";

function Navigation() {
  const links = [
    { name: "About Me", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <nav className="nav-links">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;

