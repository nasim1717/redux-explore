import { ADDTOCART, ADDTOPRODUCT, MINUSCART } from "./actionType";

export const addProuduct = ({ productName, productCategory, imgUrl, price, quantity }) => {
  return {
    type: ADDTOPRODUCT,
    payload: { productName, productCategory, imgUrl, price, quantity },
  };
};

export const addToCart = (cartProduct) => {
  return {
    type: ADDTOCART,
    payload: cartProduct,
  };
};

export const minusCart = (cartProduct) => {
  return {
    type: MINUSCART,
    payload: cartProduct,
  };
};
