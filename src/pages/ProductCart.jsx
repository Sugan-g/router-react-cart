import { useCart } from "../context/CartContext";
import CardItem from "../components/CardItem";
import { useNavigate } from "react-router-dom";

function ProductCart() {
    const { cart } = useCart();
    const navigate = useNavigate();
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discount = total * 0.1;
    const finalPrice = total - discount;

    return (
        <div className="p-10 mt-10">
            <h2 className="font-bold text-white">Your Cart</h2>
            <button onClick ={()=>navigate('/')} className="rounded-lg text-xl w-40 h-10 text-white bg-red-600 absolute top-4 right-4  mt-30">Close</button>
            {cart.length === 0 ? (<p className="text-gray-400">Your cart is empty </p>) : (
                <div>
                    {cart.map((item) => (<CardItem key={item.id} item={item} />))}
                    <div className="mt-10 p-5 rounded shadow bg-gray-100 gap-10">
                        <p className="text-2xl p-2">
                            Subtotal : <span className="font-bold">$ {total.toFixed(2)}</span>
                        </p>
                        <p className="text-2xl p-2">
                            Discount (10%) :{" "}
                            <span className="font-bold text-red-500">-$ {discount.toFixed(2)}</span>
                        </p>
                        <p className="text-2xl p-2">
                            Final Price :{" "}
                            <span className="font-bold text-green-500">$ {finalPrice.toFixed(2)}</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductCart;