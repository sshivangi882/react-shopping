import { useState, useEffect } from "react";

export default function ShoppingComponent(){
const [categories, setCategories] = useState([]);

function LoadCategories(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(response=>response.json())
    .then(data=>{
        data.unshift('All')
        setCategories(data);
    
    })
}

useEffect(()=>{
    LoadCategories();
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
                                        <option key={category}>{category.toUpperCase}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>

                </nav>
                <main>

                </main>
            </section>
        </div>
    )
}