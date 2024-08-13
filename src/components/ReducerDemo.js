import { useReducer, useState, useEffect } from "react"

var initialState = {likes:0, dislikes: 0};

function reducer(state, action){
    switch(action.type)
    {
        case 'like':
            return {likes : parseInt(state.likes) +1, dislikes: state.dislikes};
        case 'dislike':
            return {dislikes : parseInt(state.dislikes) + 1, likes: state.likes};
    }
}
export default function ReducerDemo() {
    
    const[state, dispatch] = useReducer( reducer, initialState);
    const [product, setproduct] = useState({});

  
 
    function handleLikeClick(){
        dispatch({type:'like'});
    }
    function handleDisikeClick(){
        dispatch({type:'dislike'});
    }
    return(
        <div className="container-fluid">
           <h2>Product Details</h2>
           {/* {
            product.title
           } */}
           <div className="card p-2" style={{width:'200px'}}>
                <img src={product.image} className="card-img-top" height={160}/>
                <div className="card-header">
                    <p>{product.title}</p>
                </div>
           </div>
           <div className="card-footer">
          [{state.likes}]  <button className="btn btn-primary" onClick={handleLikeClick}><span className="bi bi-hand-thumbs-up"></span></button>
          [{state.dislikes}]  <button className="btn btn-danger" onClick={handleDisikeClick}><span className="bi bi-hand-thumbs-down"></span></button>
            </div>
        </div>
    )
}