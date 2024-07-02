
 
export default function DataBindingComponent(){
    var size ={
        Width: 450 ,
        Height :100
    }
    return (
       <div className="container">
            <h2>Property Binding</h2>
            <table border="1" width={size.width} Height = {size.Height}>
                <tr>
                    <td>Welcome to React</td>
                </tr>
            </table>

        </div>
    )
}