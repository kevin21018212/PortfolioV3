import Link from "next/link";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="red-rectangle"></div>
      <div className="red-triangle"></div>
      <div className="first-link">
        <Link className="lnk" href="/">
          Home
        </Link>
      </div>
      <div className="link">
        <Link className="lnk" href="/projects">
          Projects
        </Link>
      </div>
      <div className="link">
        <Link className="lnk" href="/resume">
          Resume
        </Link>
      </div>
      <div className="link">
        <Link className="lnk" href="/contact">
          Contact
        </Link>
      </div>
      <div className="empty-rhombus"></div>
    </div>
  );
};

export default NavBar;
