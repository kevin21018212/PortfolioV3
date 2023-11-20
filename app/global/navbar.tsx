import Link from "next/link";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="red-rectangle"></div>
      <div className="red-triangle"></div>
      <div className="first-link">
        <Link href="/">
          <p>Home</p>
        </Link>
      </div>
      <div className="link">
        <Link href="/projects">
          <p>Projects</p>
        </Link>
      </div>
      <div className="link">
        <Link href="/resume">
          <p>Resume</p>
        </Link>
      </div>
      <div className="link">
        <Link href="/contact">
          <p>Contact</p>
        </Link>
      </div>
      <div className="empty-rhombus"></div>
    </div>
  );
};

export default NavBar;
