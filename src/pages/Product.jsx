import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                // console.log("Fetched Products:", data);  // ✅ log the response
                // alert("test");
                setProducts(data);

            }).catch((err) => console.log("error:", err));
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
    )
}

export default Product;
