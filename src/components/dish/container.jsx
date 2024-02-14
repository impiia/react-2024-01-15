import style from './styles.module.scss';
import { Button } from '../button/component';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectProductAmountById } from '../../redux/ui/cart';
import { Dish } from './component';
import { useGetDishByIdQuery } from '../../redux/services/api';

export const DishContainer = ({ dishId }) => {

    const { isLoading, data: dish } = useGetDishByIdQuery(dishId);

    const amount = useSelector((state) =>
        selectProductAmountById(state, dishId)
    );
    const dispatch = useDispatch();

    return (
        <div className={style.root}>
            {isLoading ? <div>Loading...</div> :
                (dish && (
                    <Dish dish={dish} />
                ))}
            <div className={style.buttonContainer}>
                <Button className={style.button} onClick={() => dispatch(decrement(dishId))} disabled={amount === 0}>-</Button>
                <p>{amount}</p>
                <Button className={style.button} onClick={() => dispatch(increment(dishId))} disabled={amount === 5}>+</Button>
            </div>
        </div>
    );
};
