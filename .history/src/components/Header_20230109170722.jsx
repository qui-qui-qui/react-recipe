function Header() {
  return (
    <nav className="light-blue accent-1">
      <div className="nav-wrapper">
        <a href="!#" className="brand-logo left">
          React shop
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="#!" target="_blank" rel="">
                Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
