import React from "react";

export default class ShoppingClassDemo extends React.Component
{
    render(){
        return(
            <div className="container-fluid">
                <header className="bg-danger p-2 text-white text-center">
                    <h2><span className="bi bi-cart"></span>Shoppping Cart</h2>
                </header>
                <section className="row">
                    <nav className="col-3">
                        <h2>Select Category</h2>
                        <select className="form-select">

                        </select>

                    </nav>
                    <main className="col-9">
                        <div className="d-flex flex-wrap"></div>
                    </main>
                </section>
            </div>
        )
    }
}