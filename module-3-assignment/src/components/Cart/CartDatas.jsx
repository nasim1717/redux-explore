import { useDispatch } from "react-redux";
import { addToCart, minusCart } from "../../redux/action";

const CartDatas = ({ carts }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const { productName, productCategory, imgUrl, price, cart, id } = carts;
  const handleAddCart = (carts) => {
    dispatch(addToCart(carts));
  };
  const handleMinusCart = (carts) => {
    console.log("minus: ", carts.price);
    dispatch(minusCart(carts));
  };

  return (
    <div className="space-y-6">
      {/* <!-- Cart Item --> */}
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          {/* <!-- cart image --> */}
          <img className="lws-cartImage" src={imgUrl} alt="product" />
          {/* <!-- cart item info --> */}
          <div className="space-y-2">
            <h4 className="lws-cartName">{productName}</h4>

            <p className="lws-cartCategory">{productCategory}</p>
            <p>
              BDT <span className="lws-cartPrice">{price}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          {/* <!-- amount buttons --> */}
          <div className="flex items-center space-x-4">
            <button onClick={() => handleAddCart(carts)} className="lws-incrementQuantity">
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
            <span className="lws-cartQuantity">{cart}</span>
            <button onClick={() => handleMinusCart(carts)} className="lws-decrementQuantity">
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          </div>
          {/* <!-- price --> */}
          <p className="text-lg font-bold">
            BDT <span className="lws-calculatedPrice">{price}</span>
          </p>
        </div>
        {/* <!-- delete button --> */}
        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button className="lws-removeFromCart">
            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      {/* <!-- Cart Items Ends --> */}
    </div>
  );
};

export default CartDatas;
