export const addToCart = (payload) => {
 return {
  type: "ADD_TO_CART",
  payload,
 };
};

export const addSubTotal = (payload) => {
 return {
  type: "ADD_SUBTOTAL",
  payload,
 };
};

export const addVat = (payload) => {
 return {
  type: "ADD_VAT",
  payload,
 };
};

export const addTotal = (payload) => {
 return {
  type: "ADD_TOTAL",
  payload,
 };
};

export const calculateDiscount = (payload) => {
 return {
  type: "DISCOUNT_PRICE",
  payload,
 };
};

export const addCupon = (payload) => {
 return {
  type: "USE_CUPON",
  payload,
 };
};

export const increaseQuantity = (payload) => {
 return {
  type: "INCREASE_QUANTITY",
  payload,
 };
};

export const removeFromCart = (payload) => {
 return {
  type: "REMOVE_FROM_CART",
  payload,
 };
};
