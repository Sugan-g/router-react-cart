import { useCart } from "../context/CartContext";
function ProductCard({ product, inCart }) {
    const { addToCart, removeFromCart } = useCart();

    return (
        <div className="flex flex-col border rounded-2xl p-4 shadow-md h-full">
            <img src={product.image}
                alt={product.title}
                className="h-40 w-60 object-contain" />
            <h2 className="font-bold text-white mt-5">{product.title}</h2>
            <p className="font-bold text-lg flex-grow overflow-hidden line-clamp-3 mt-5">{product.description}</p>
            <p className="text-base text-gray-600  mt-3">${product.price}</p>
            {inCart ? (
                <div className="flex justify-center">
                    <button onClick={() => removeFromCart(product.id)}
                        className="rounded-lg text-bg-600 text-white w-40 py-2 transition">
                        Remove From Cart
                    </button>
                </div>

            ) : (<div className="flex justify-center mt-30">
                <button onClick={() => addToCart(product)}
                    className="rounded-lg bg-blue-500 text-white w-40 py-2 transition">
                    Add To Cart
                </button>
            </div>)}
        </div>
    )
}

export default ProductCard;