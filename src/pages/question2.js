const Navbar = () => {
  return (
    <div className="navbar-section" style={{ display: "flex", borderBottom: "1px solid #EFEFEF", margin: "0 16px" }}>
    <div className="navbar-menu-listing">
      <a className="navbar-menu" href="/">
        AEON
      </a>
      <a className="navbar-menu" href="/">
        Showcase
      </a>
      <a className="navbar-menu" href="/">
        Docs
      </a>
      <a className="navbar-menu" href="/">
        Blog
      </a>
      <a className="navbar-menu" href="/">
        Analytics
      </a>
      <a className="navbar-menu" href="/">
        Templates
      </a>
      <a className="navbar-menu" href="/">
        Enterprise
      </a>
    </div>
    <div className="navbar-search" style={{ display: "block", margin: "auto 16px auto auto"}}>
      <input style={{ background: "#EFEFEF", border: "none", padding: "4px 8px", width: "100%"}} placeholder="Search documentation..." type="text" />
    </div>
  </div>
  );
};

export default Navbar;
