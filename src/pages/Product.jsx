import { useState, useEffect, useMemo } from "react";
import Productcart from "../components/Product.cart";
import "./Product.css"
export default function Products() {
    const [products, setProducts] = useState([]);
    const [error,setError]=useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => 
                {
                    if(!response.ok)
                    {
                        throw new Error ("Failed to featch the api");
                    }
                    return response.json()
            })

            .then(data=>setProducts(data))
            .catch(()=>setError("Something wents wrong"));
    }, []);


    const filterproduct=useMemo(()=>
    {
        return products.filter(product=>product.price<150);
    },[products]);

    if(error)
    {
        return<h2>{error}</h2>
    }

    return (

        <main className="products-page">
            <h1>Products</h1>

            <div className="products-grid">
                {filterproduct.map((product) => (
                    <Productcart
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))
                }
            </div> 
            </main>
    );
}


