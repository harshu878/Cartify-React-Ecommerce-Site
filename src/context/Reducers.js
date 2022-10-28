import React from 'react'

export const cartReducer = (state, action) => {
 switch (action.type) {
   // case value:
   case 'add':
     return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
   case 'remove':
     return {
       ...state,
       cart: state.cart.filter(c => c.id !== action.payload.id),
     };
   case 'CHANGE_CART_QTY':
     return {
       ...state,
       cart: state.cart.filter(c =>
         c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
       ),
     };
   default:
     return state;
 }
}
export const productReducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY_PRICE':
      return { ...state, sort: action.payload };
    case 'FILTER_BY_STOCK':
      return { ...state, byStock: action.payload };
    case 'FILTER_BY_DELIVERY':
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case 'FILTER_BY_RATING':
      return { ...state, byRating: action.payload };
    case 'FILTER_BY_SEARCH':
      return { ...state, searchQuery: action.payload };
    case 'CLEAR_FILTERS':
      return { byStock: false, byFastDelivery: false, byRating: 0 , sort:''};
    default:
      return state;
  }
};
