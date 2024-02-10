import style from './styles.module.scss';
import { Button } from '../button/component';
import { selectDishById } from '../../redux/entities/dish/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDishById } from '../../redux/entities/dish/thunk/get-dishes';
import { decrement, increment, selectProductAmountById } from '../../redux/ui/cart';

export const Dish = ({ dishId }) => {
  const dish = useSelector(selectDishById(dishId));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishById(dishId));
  }, [dispatch, dishId]);
  const amount = useSelector((state) =>
    selectProductAmountById(state, dishId)
  );

  return (
    <div className={style.root}>
      {dish && (
        <div>
          <div>{dish.name}</div>
          <div>{dish.price}</div>
        </div>
      )}
      <div className={style.buttonContainer}>
        <Button className={style.button} onClick={() => dispatch(decrement(dishId))} disabled={amount === 0}>-</Button>
        <p>{amount}</p>
        <Button className={style.button} onClick={() => dispatch(increment(dishId))} disabled={amount === 5}>+</Button>
      </div>
    </div>
  );
};
