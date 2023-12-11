export const NavBar = ({setCategory, setRegion}) => {

  const categories = ["general", "sports", "technology", "business", "health", "science", "entertainment"];

  function returnRandomCategory(){
    const randomIndex = Math.floor(Math.random() * (6 - 0));
    return categories[randomIndex];
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><div className="dropdown-item" onClick={() => setCategory("general")}>General</div></li>
                  <li><div className="dropdown-item" onClick={() => setCategory("sports")}>Sports</div></li>
                  <li><div className="dropdown-item" onClick={() => setCategory("technology")}>Technology</div></li>
                  <li><div className="dropdown-item" onClick={() => setCategory("business")}>Business</div></li>
                  <li><div className="dropdown-item" onClick={() => setCategory("health")}>Health</div></li>
                  <li><div className="dropdown-item" onClick={() => setCategory("science")}>Science</div></li>
                  <li><div className="dropdown-item" onClick={() => setCategory("entertainment")}>Entertainment</div></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><div className="dropdown-item" onClick={() => setCategory(returnRandomCategory())}>Random</div></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Region
                </a>
                <ul className="dropdown-menu">
                  <li><div className="dropdown-item" onClick={() => setRegion("gb")}>United Kingdom</div></li>
                  <li><div className="dropdown-item" onClick={() => setRegion("us")}>United States</div></li>
                  <li><div className="dropdown-item" onClick={() => setRegion("ca")}>Canada</div></li>
                  <li><div className="dropdown-item" onClick={() => setRegion("mx")}>Mexico</div></li>
                  <li><div className="dropdown-item" onClick={() => setRegion("cn")}>China</div></li>
                  <li><div className="dropdown-item" onClick={() => setRegion("jp")}>Japan</div></li>
                  <li><div className="dropdown-item" onClick={() => setRegion("de")}>Germany</div></li>
                  <li><div className="dropdown-item" onClick={() => setRegion("fr")}>France</div></li>
                  <li><div className="dropdown-item" onClick={() => setRegion("br")}>Brazil</div></li>
                  <li><div className="dropdown-item" onClick={() => setRegion("ar")}>Argentina</div></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;