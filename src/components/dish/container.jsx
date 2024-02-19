import style from './styles.module.scss';
import { Button } from '../button/component';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectProductAmountById  } from '../../redux/ui/cart';
import { Dish } from './component';

export const DishContainer = ({ dish }) => {
    const amount = useSelector((state) =>
    selectProductAmountById(state, dish.id)
    );
    const dispatch = useDispatch();

    return (

        <div className={style.root}>
             <Dish dish={dish}></Dish> 
            <div className={style.buttonContainer}>
                <Button className={style.button} onClick={() => dispatch(decrement(dish.id))} disabled={amount === 0}>-</Button>
                <p>{amount}</p>
                <Button className={style.button} onClick={() => dispatch(increment(dish.id))} disabled={amount === 5}>+</Button>
            </div>
        </div>
    );
};
