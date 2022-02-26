import React, {createContext, useContext} from 'react'

const CartContext = createContext();
const useCartcontext = function(){
    return useContext(CartContext);
};

export function CartContextProvider({children}) {

  return (
    <CartContextProvider value={ {quantity: 5} }>
    
        {children}
    
    </CartContextProvider>
  )
}

export default useCartcontext;