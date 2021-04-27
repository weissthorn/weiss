import Link from 'next/link';

const Header = () => (
  <div className="navbar">
    <div className="inner">
      <Link href="/">
        <a className="logo">Weiss</a>
      </Link>
      <span className="links">
        <a href="">Community</a>
        <a href="">Members</a>
      </span>
      <span className="search">
        <input type="search" placeholder="Search...." />
        <div className="results">Hello</div>
      </span>
      <span className="links right">
        <a href="">
          <i className="ion ion-compose"></i> Write post
        </a>

        <a href="">Admin</a>

        <span class="dropdown">
          <button class="dropbtn">
            <i className="ion ion-person"></i> User &nbsp;
            <i className="ion ion-android-arrow-dropdown"></i>
          </button>
          <span class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </span>
        </span>
      </span>
    </div>
  </div>
);

export default Header;
