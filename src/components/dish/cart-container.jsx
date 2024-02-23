import style from './styles.module.scss';
import { ButtonMemoized } from '../button/component';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectProductAmountById } from '../../redux/ui/cart';
import { useCallback } from 'react';

export const DishCartContainer = ({ dishId }) => {
    const amount = useSelector((state) =>
        selectProductAmountById(state, dishId)
    );
    const dispatch = useDispatch();
    const handleDecrement = useCallback(() => {
        dispatch(decrement(dishId));
    }, [dispatch, dishId]);

    const handleIncrement = useCallback(() => {
        dispatch(increment(dishId));
    }, [dispatch, dishId]);

    return (

        <div className={style.root}>
            <div>{dishId}</div>
            <div className={style.buttonContainer}>
                <ButtonMemoized className={style.button} onClick={handleDecrement} disabled={amount === 0}>-</ButtonMemoized>
                <p>{amount}</p>
                <ButtonMemoized className={style.button} onClick={handleIncrement} disabled={amount === 5}>+</ButtonMemoized>
            </div>
        </div>
    );
};


