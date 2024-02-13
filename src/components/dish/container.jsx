import style from './styles.module.scss';
import { Button } from '../button/component';
import { selectDishById } from '../../redux/entities/dish/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDishById } from '../../redux/entities/dish/thunk/get-dishes';
import { decrement, increment, selectProductAmountById } from '../../redux/ui/cart';
import { selectIsLoading } from '../../redux/ui/request';
import { Dish } from './component';
import { ModalIsLoading} from '../modal-loading/component';

export const DishContainer = ({ dishId }) => {
    const [requestId, setRequestId] = useState();
    const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));
    const dish = useSelector(selectDishById(dishId));

    const dispatch = useDispatch();
    useEffect(() => {
        setRequestId(dispatch(getDishById(dishId)).requestId);
    }, [dispatch, dishId]);
    const amount = useSelector((state) =>
        selectProductAmountById(state, dishId)
    );

    return (
        <div className={style.root}>
            {isLoading ? <ModalIsLoading /> :
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