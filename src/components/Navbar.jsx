import style from "./Navbar.module.css"
export default function Navbar() {
  return (
<>
<nav className="navbar navbar-expand-lg bg-dark bg-gradient fixed-top">
  <div className="container">
    <a className={`${style.navitemsCustom} navbar-brand`} href="#">Pizza_recipes</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`${style.navitemsCustom} nav-link`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={`${style.navitemsCustom} nav-link`} href="#">About</a>
        </li>
        <li className="nav-item">
          <a className={`${style.navitemsCustom} nav-link`} href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className={`${style.navitemsCustom} nav-link`} href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className={`${style.navitemsCustom} nav-link`} href="#">Register</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}
