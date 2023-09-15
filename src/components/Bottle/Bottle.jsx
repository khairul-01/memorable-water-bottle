import './Bottle.css'
import PropTypes from 'prop-types'

const Bottle = ({bottle, bottleHandler}) => {
   const {name, img, price} = bottle;
   console.log
   return (
      <div className="bottle">
         <h3>Bottle Name: {name}</h3>
         <img src={img} alt="" />
         <p>Price: {price}</p>
         <button onClick={()=>bottleHandler(bottle)}>Add to Cart</button>
      </div>
   );
};

Bottle.propTypes = {
   bottle: PropTypes.object.isRequired,
   bottleHandler: PropTypes.func.isRequired
}
export default Bottle;