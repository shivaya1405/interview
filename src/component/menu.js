import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="flex m-2 flex-col">
        <Link to="/">
          <img
            className="h-6 w-8 mb-2"
            src="https://www.clipartmax.com/png/middle/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png"
            alt="menu"
          />
        </Link>
        <Link to="/HomePage">
          <h1 className="p-2 bg-gray-600 border text-white rounded-md mb-2 border-gray-500">
            Home Page
          </h1>
        </Link>
        <Link to="/Customers">
          <h1 className="p-2 border bg-gray-600 text-white rounded-md border-gray-300">
            Customers
          </h1>
        </Link>
      </div>
    </>
  );
};
export default Menu;
