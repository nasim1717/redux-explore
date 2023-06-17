import { NavLink } from "react-router-dom";
import logo1 from "../../../assets/images/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalCarts = useSelector((state) => state.cartProduct);
  const carts = totalCarts.reduce((prev, current) => prev + current.cart, 0);

  return (
    <>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="index.html">
            <img src={logo1} alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <NavLink to="/" className="navHome" id="lws-home">
              Home
            </NavLink>
            <NavLink to="/cart" className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{carts}</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
