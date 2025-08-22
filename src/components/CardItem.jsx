import { useCart } from "../context/CartContext";
function CardItem({ item }) {
    const { increaseQty, decreaseQty, removeFromCart } = useCart();
    return (
        <div className="flex flex-col md:flex-row  md:justify-between md:items-center p-4 border-b gap-10">
           <div className="md:w-30 flex justify-center"> 
            <img
                src={item.image}
                alt={item.title}
                className="md:h-40 md:w-80 h-30 w-30 object-contain rounded-xl"
            />
            </div>
            <div className="flex-1 md:flex-left text-center px-5">
            <p className="font-bold text-black  ">{item.title}</p>
            <p className="font-bold text-black md:hidden" >{item.price}</p>
            </div>
            {/*price(only desktop) */}
            <div className="hidden md:block w-24 text-center">
             <p className="font-bold text-black md:hidden" >{item.price}</p>
             </div>
            <div className="flex justify-center md:w-40 items-center gap-5">
                <button onClick={() => decreaseQty(item.id)} className="px-5 py-3 rounded-xl bg-gray-300">-</button>
                <button onClick={() => increaseQty(item.id)} className="px-5 py-3  rounded-xl bg-gray-300">+</button>
            </div>
            <div className="text-center md:w-30">
            <p className="font-bold text-black ">${(item.price * item.qty).toFixed(2)}</p>
            </div>
            <div className="flex justify-center md:w-32">
                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white font-bold text-sm md:text-base rounded-xl px-4 w-20 h-10">remove</button>
            </div>
            
        </div>

    )
}
export default CardItem;