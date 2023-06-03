import axios from "axios"
import { json } from "react-router-dom"


export const addToCart = (id) => async (dispatch , getState) => {
   const {data} = await axios.get(`http://localhost:8000/api/products/${id}`)

   dispatch({
    type : 'CART_ADD_ITEM',
    payload : {
        product : data._id,
        name : data.name,
        image : data.image,
        price : data.price,
    }
   })

   localStorage.getItem('cartItems', json.Stringify(getState().cart.cartItems) )
}


export const removeFromCart = (id) => (dispatch , getState) => {
    dispatch( {
        type: 'CART_REMOVE_ITEM',
        payload : id
    })

    localStorage.setItem('cartItems' , JSON.stringify(getState().cart.cartItems))

}