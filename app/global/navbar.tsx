import Link from "next/link";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="red-rectangle"></div>
      <div className="red-triangle"></div>
      <div className="first-link">
        <Link href="/">
          <p>HOME</p>
        </Link>
      </div>
      <div className="link">
        <Link href="/projects">
          <p>WORKS</p>
        </Link>
      </div>
      <div className="link">
        <Link href="/resume">
          <p>RESUME</p>
        </Link>
      </div>
      <div className="link">
        <Link href="/contact">
          <p>CONTACT</p>
        </Link>
      </div>
      <div className="empty-rhombus"></div>
    </div>
  );
};

export default NavBar;
