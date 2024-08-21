import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export function IShopProductDetails() {
  const [product, setProduct] = useState({});
  let params = useParams();

  useEffect(() => {
    let id = parseInt(params.id);
    axios.get(`http://localhost:4000/getproduct/${id}`).then((response) => {
      setProduct(response.data || {}); // Fallback to an empty object if response.data is undefined
    });
  }, [params.id]); // Dependency array to ensure the effect runs when id changes

  return (
    <div>
      <h2>Product Details - {product.id}</h2>
      <dl>
        <dt>Title</dt>
        <dd>{product.title || "N/A"}</dd> {/* Fallback if title is undefined */}
        <dt>Price</dt>
        <dd>{product.price || "N/A"}</dd> {/* Fallback if price is undefined */}
        <dt>Preview</dt>
        <dd>
          {product.image ? (
            <img
              src={product.image}
              width={100}
              height={100}
              alt={product.title || "Product Image"}
            />
          ) : (
            "No image available"
          )}
        </dd>
        <dt>Rating</dt>
        <dd>
          {product.rating ? `${product.rating.rate} / 5` : "No rating available"}
        </dd>
      </dl>
      <br />
      {/* {product.categories ? (
        <Link to={`/products/${product.categories}`}>Back to Products</Link>
      ) : (
        <p>No categories available</p>
      )} */}
    </div>
  );
}
