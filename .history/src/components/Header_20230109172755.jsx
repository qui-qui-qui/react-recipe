import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="light-blue accent-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          React shop
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/about">
                About
            </Link>
          </li>
          <li>
            <Link to="/contacts">
                Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
