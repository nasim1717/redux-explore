import { NavLink } from "react-router-dom";
import Logo from "../assets/img/lws-logo.svg";

const Layout = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <img src={Logo} alt="logo" className="logo" />
          <div className="flex items-center">
            <NavLink to="" className="text-white min-w-[50px] font-medium">
              Home
            </NavLink>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Layout;
