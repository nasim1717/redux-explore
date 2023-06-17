import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/action";

// eslint-disable-next-line react/prop-types
const Products = ({ product }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const { productName, productCategory, imgUrl, price, quantity, id } = product;

  const productCart = {
    productName: product.productName,
    productCategory: product.productCategory,
    imgUrl: product.imgUrl,
    price: product.price,
    cart: 1,
    id: product.id,
  };

  const handleCart = (cartProduct) => {
    dispatch(addToCart(cartProduct));
  };

  return (
    <>
      {/* <!-- product item --> */}
      <div className="lws-productCard">
        <img className="lws-productImage" src={imgUrl} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{productName}</h4>
          <p className="lws-productCategory">{productCategory}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{quantity}</span>
            </p>
          </div>
          <button
            disabled={quantity <= 0}
            onClick={() => handleCart(productCart)}
            className="lws-btnAddToCart"
          >
            Add To Cart
          </button>
        </div>
      </div>
      {/* <!-- product item ends --> */}
    </>
  );
};

export default Products;
