function Footer() {
    return <footer className="footer-copyright light-blue accent-2">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">Ref</a>
      </div>
  </footer>
}

export {Footer}