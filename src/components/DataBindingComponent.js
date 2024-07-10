
 
export default function DataBindingComponent(){
    var menu =[
        {Category : "Electronics", Products:["Samsung TV", "Mobile"]},
        {Category : "Footwear", Products:["Nike Causals ", "Lee Boot"]}

    ]
    return(
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    menu.map(item =>
                        <li>{item.Category}</li>
                    )
                }
            </ol>


        </div>
    )
                    
}