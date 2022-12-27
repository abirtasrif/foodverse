import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center container mx-auto py-8 flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="logo text-2xl">
        Food<span> Verse</span>
      </h2>
      <form className="search-bar">
        <input type="search" placeholder="Search recipe here..." />
      </form>
      <ul className="menu">
        <li>
          <NavLink end to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favourites">
            Favourites <span className="fav-count">(10)</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
