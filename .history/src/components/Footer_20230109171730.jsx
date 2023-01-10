function Footer() {
  return <footer className="page-footer light-blue accent-2">
  <div className="footer-copyright light-blue accent-2">
    <div className="container">
    © {new Date().getFullYear()} Copyright Text
    <a className="grey-text right" href="#!">Ref</a>
    </div>
  </div>
</footer>
}

export {Footer}