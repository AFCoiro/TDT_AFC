import { createContext , useState } from "react"

const CartContext = createContext();

const CartProvider = ({children})=>{
    const [cartListItem, setCartListItem] = useState([]);
    const [ total, setTotal] = useState(0); 
            
    const addCart = (prod)=>{
        let isInCart = cartListItem.find(cartItem => cartItem.id === prod.id)
        if(!isInCart){
            setTotal(total + prod.precio * prod.count);
            return setCartListItem(cartListItem => [...cartListItem, prod])
            
        }
        
    }

    const removeCart = (id)=>{
        const arrayRest = cartListItem.filter((prod) => prod.id !== id)
        setCartListItem(arrayRest);
    };

    const clear = (id)=>{
        setCartListItem([]);
        cartListItem(0);
    }

    const data = {
        cartListItem,addCart,removeCart,clear,total
    }   

        return(
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>
        )
}

export default CartContext;
export {CartProvider};

