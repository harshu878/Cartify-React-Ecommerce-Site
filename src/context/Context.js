import React, { createContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer,  productReducer } from './Reducers';
export const Cartcontext = createContext()
faker.seed(99)
const Context = ({ children }) => {

    const products = [...Array(20)].map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price().split('.')[0],
      image: faker.image.image(),
      inStock: faker.helpers.arrayElements([0, 3, 5, 6, 7])[0],
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.helpers.arrayElements([1, 2, 3, 4, 5])[0],
    }));
 

    const [state, dispatch] = useReducer(cartReducer, {
products: products,
cart:[],
 
    })

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: '',
   
  });

  return (
    <Cartcontext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

export default Context