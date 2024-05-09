import classes from './CartButton.module.css';
import { uiactions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const total = useSelector(state=> state.cart.totalQuantity)

  const togglecartHandler = ()=>{
      dispatch(uiactions.toggle())
  }
  return (
    <button className={classes.button} onClick={togglecartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
