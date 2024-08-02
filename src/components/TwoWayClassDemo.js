import React from "react";

export default class TwoWayClassDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {    // derived class state
            // title: 'Product Details',
            // Name : 'Samsung TV' ,
            // Price : 56000.44 ,
            // Stock : true, 
            // Cities : ['Delhi', 'Hyd'],
            // Rating :{rate : 4.5, count:6700}
            UserName : 'john'
        }
        // this.handleUserChange = this.handleUserChange.bind(this); any one is enough
    }

    handleUserChange(e){
        // alert(e.target.value);
        this.setState({
            UserName : e.target.value
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>User Details</h2>
                <input type="text" onChange={this.handleUserChange.bind(this)} />
                <br />
                <p> Hello ! {this.state.UserName}</p>
                {/* <h2>
                    {this.state.title}
                </h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.state.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.Price}</dd>
                    <dt>Stock</dt>
                    <dd>{(this.state.Stock==true)?"Available":"Out of Stock"}</dd>
                    <dt>Cities</dt>
                    <dd>
                        <ol>
                            {
                                this.state.Cities.map(city =>
                                    <li key={city}>{city}</li>
                                )
                            }
                        </ol>
                    </dd>
                    <dt>Rating</dt>
                    <dd>
                        <span className="bi bi-star-fill text-success"></span> {this.state.Rating.rate} [{this.state.Rating.count}]
                    </dd>
                </dl> */}
            </div>
        )
    }
}