const initialState = {
 cart: [],
 subTotal: 0,
 totalVat: 0,
 totalPrice: 0,
 discountPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
 if (action.type === "ADD_TO_CART") {
  return {
   ...state,
   cart: action.payload,
  };
 } else if (action.type === "ADD_SUBTOTAL") {
  return {
   ...state,
   subTotal: action.payload,
  };
 } else if (action.type === "ADD_VAT") {
  return {
   ...state,
   totalVat: action.payload,
  };
 } else if (action.type === "ADD_TOTAL") {
  return {
   ...state,
   totalPrice: action.payload,
  };
 } else if (action.type === "DISCOUNT_PRICE") {
  return {
   ...state,
   discountPrice: action.payload,
  };
 } else if (action.type === "USE_CUPON") {
  return {
   ...state,
   cuponUsed: action.payload,
  };
 } else if (action.type === "INCREASE_QUANTITY") {
  return {
   ...state,
   cart: state.cart.map((item) => {
    if (item.id === action.payload) {
     item.quantity += 1;
    }
    return item;
   }),
  };
 } else if (action.type === "DECREASE_QUANTITY") {
  return {
   ...state,
   cart: state.cart.map((item) => {
    if (item.id === action.payload) {
     if (item.quantity > 0) {
      item.quantity = item.quantity - 1;
     }
    }
    return item;
   }),
  };
 } else {
  return state;
 }
};
