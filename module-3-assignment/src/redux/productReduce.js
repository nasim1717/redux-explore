import { ADDTOCART, ADDTOPRODUCT, MINUSCART } from "./actionType";
import productInitialState from "./productInitialState";

const maxId = (addProduct) => {
  const id = addProduct.reduce((prev, current) => Math.max(prev, current.id), 0);
  return id + 1;
};

const existCat = (existCart, newCart, currentProduct) => {
  let addCart;
  const current = currentProduct.find((current) => current.id === newCart.id);
  const checkCart = existCart.find((cart) => cart.id === newCart.id);
  if (checkCart) {
    addCart = existCart.map((carts) => {
      if (carts.id === newCart.id) {
        carts.cart = parseInt(carts.cart) + 1;
        carts.price = parseInt(carts.price) + parseInt(current.price);
        return carts;
      }
      return carts;
    });
    return addCart;
  }
  return [...existCart, newCart];
};

const minusCart = (existCart, newCart, allProduct) => {
  const currentPrice = allProduct.find((current) => current.id === newCart.id);
  const addCart = existCart.map((carts) => {
    if (carts.id === newCart.id) {
      carts.cart = parseInt(carts.cart) - 1;
      carts.price = parseInt(newCart.price) - parseInt(currentPrice.price);
      return carts;
    }
    return carts;
  });
  const deleteCart = addCart.filter((carts) => carts.cart !== 0);
  // console.log("addcart", deleteCart);
  return deleteCart;
};

const productReduce = (state = productInitialState, action) => {
  switch (action.type) {
    case ADDTOPRODUCT:
      // eslint-disable-next-line no-case-declarations
      const id = maxId(state.addProduct);
      action.payload.id = id;
      return {
        ...state,
        addProduct: [...state.addProduct, action.payload],
      };
    case ADDTOCART:
      // eslint-disable-next-line no-case-declarations
      // const addCart = existCat(state.cartProduct, action.payload);
      return {
        ...state,
        addProduct: [
          ...state.addProduct.map((cart) => {
            if (cart.id === action.payload.id && cart.quantity > 0) {
              cart.quantity = parseInt(cart.quantity) - 1;
              return cart;
            }
            return cart;
          }),
        ],
        cartProduct: [...existCat(state.cartProduct, action.payload, state.addProduct)],
      };
    case MINUSCART:
      return {
        ...state,
        addProduct: [
          ...state.addProduct.map((cart) => {
            if (cart.id === action.payload.id) {
              cart.quantity = parseInt(cart.quantity) + 1;
              return cart;
            }
            return cart;
          }),
        ],
        cartProduct: [...minusCart(state.cartProduct, action.payload, state.addProduct)],
      };

    default:
      return state;
  }
};

export default productReduce;
