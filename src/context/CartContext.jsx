import { createContext, useContext, useState } from "react";

const CartContext = createContext();
function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const alreadyExist = cart.find((item) => item.id === product.id);
        if (alreadyExist) {
            alert('Already item added in cart!!');
            setCart(cart.map((item) =>
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    }
    //removeFromCart 
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }
    //Increase Quantity
    const increaseQty = (id) => {
        setCart(cart.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item))
    }
    //Decrease Quantity 
    const decreaseQty = (id) => {
        setCart(cart.map((item) => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item))
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty }}>
            {children}
        </CartContext.Provider>
    );
}
export function useCart() {
    return useContext(CartContext);
}

export default CartProvider;