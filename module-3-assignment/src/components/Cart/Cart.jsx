import { useSelector } from "react-redux";
import CartDatas from "./CartDatas";
import BillDetails from "./BillDetails";

const Cart = () => {
  const cartDatas = useSelector((state) => state.cartProduct);

  return (
    <div className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {/* <!-- Cart Item --> */}
            {cartDatas.map((cart) => (
              <CartDatas key={cart.id} carts={cart}></CartDatas>
            ))}
            {/* <!-- Cart Items Ends --> */}
          </div>

          {/* <!-- Bill Details --> */}
          <BillDetails></BillDetails>
        </div>
      </div>
    </div>
  );
};

export default Cart;
