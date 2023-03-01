import { useDispatch, useSelector } from 'react-redux';
import { UIActions } from '../../store/UI-Slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const noOfItems = useSelector(state => state.Cart.totalQuantity)

  const dispatch = useDispatch();

  const CartHandler = (event) => {
    dispatch(UIActions.toggle());
  }

  return (
    <button className={classes.button} onClick={CartHandler} >
      <span>My Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default CartButton;
