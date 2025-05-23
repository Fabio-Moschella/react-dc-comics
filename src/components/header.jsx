export default function Header() {
  return (
    <header id="page-header">
      <div className="background-black"></div>
      <div className="container">
        <nav>
          <div>
            <img className="dc-logo" src="/dc-logo.png" alt="" />
          </div>
          <ul className="navbar-links">
            <li>
              <a href="#">characther</a>
            </li>
            <li>
              <a href="#">comics</a>
            </li>
            <li>
              <a href="#">movies</a>
            </li>
            <li>
              <a href="#">tv</a>
            </li>
            <li>
              <a href="#">games</a>
            </li>
            <li>
              <a href="#">collectibles</a>
            </li>
            <li>
              <a href="#">videos</a>
            </li>
            <li>
              <a href="#">fans</a>
            </li>
            <li>
              <a href="#">news</a>
            </li>
            <li>
              <a href="#">shop</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
