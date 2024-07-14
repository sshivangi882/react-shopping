import { useState, useEffect } from "react";

export default function ShoppingComponent(){
const [categories, setCategories] = useState([]);
const [products, setProdutcs]= useState([]);

function LoadCategories(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(response=>response.json())
    .then(data=>{
        data.unshift('All')
        setCategories(data);
    
    })
}

function LoadProducts(){
    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>{
        setProdutcs(data);
    })
}

useEffect(()=>{
    LoadCategories();
    LoadProducts();
},[])


    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1> <span className="bi bi-cart"></span>Shopping Home </h1>

            </header>
            <section className="row">
                <nav className="col-3">
                    <div>
                        <label>Select a Cetegory</label>
                        <div>
                            <select className="form-select">
                                {
                                    categories.map(category=>
                                        <option key={category}>{category}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>

                </nav>
                <main className="col-9 f-flex flex-wrap overflow-auto style={{height:'600px'}}">
                        {
                            products.map(product =>
                                <div className="card m-2 p-2 w-25 ">
                            <img src={product.image} className="card-img-top" height="150" alt="img" />
                            <div className="card-header">
                                <p>{product.title}</p>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>
                                        <span className="bi bi-star-fill text-success"></span>
                                        {product.rating.rate} <span>[{product.rating.count}]</span>
                                    </dd>

                                        </dl>
                                    </div>
                    
                                </div>
                            )
                        }
                </main>
            </section>
        </div>
    )
}