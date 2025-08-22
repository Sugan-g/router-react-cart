import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
function Navbar() {
    const { cart } = useCart();
    return (
        <nav className="flex justify-between bg-blue-600 text-white p-6">
            <Link to="/" className="font-bold">Fake Store</Link>
            <Link to="/cart">Cart({cart.length})</Link>
        </nav>
    )
}
export default Navbar