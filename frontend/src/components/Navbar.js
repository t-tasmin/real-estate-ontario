import React from "react";
import { Link} from "react-router-dom";

const Navbar = () => {
 
  return (
    <nav>
      <div className="content-left">
        <img src="/images/house_logo.png" class="logo" />
          <Link className="title" to='/'>
              Home
          </Link>
          <Link className="title" to='/search/'>
              Search
          </Link>
          <Link className="title" to='/listings/'>
              Listings
          </Link>
          <Link className="title" to='/contact/'>
              Contact
          </Link>
      </div>
      <div className="content-right">
          <a href="/login">
            <button type="button" className="btn btn-dark" data-mdb-ripple-color="dark">
              <span>Login</span>
            </button>
          </a>
          <a href="/signup">
            <button type="button" className="btn btn-dark" data-mdb-ripple-color="dark">
              <span>SignUp</span>
            </button>
          </a>
      </div>

  </nav>
  
  );
};


export default Navbar;
