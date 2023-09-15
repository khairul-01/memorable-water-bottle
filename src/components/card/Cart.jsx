import './cart.css'
import PropTypes from 'prop-types'
const Cart = ({cart, handleRemove}) => {
   return (
      <div className="cart-container">
         <h2>Listed Cart: {cart.length} </h2>
         {
            cart.map(cart => <div key={cart.id}>

               <img src={cart.img}></img> 
               <button onClick={()=>handleRemove(cart.id)}>Remove</button>
            </div>
            )
         }
      </div>
   );
};
Cart.propTypes = {
   cart: PropTypes.array.isRequired,
   handleRemove: PropTypes.func.isRequired
}
export default Cart;