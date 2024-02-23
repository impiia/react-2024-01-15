import styles from './styles.module.scss';
import { Button, ButtonMemoized } from '../button/component';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectProductAmountById } from '../../redux/ui/cart';
import { Dish } from './component';
import { NavLink } from 'react-router-dom';
import { useCallback } from 'react';

export const DishContainer = ({ dish, className }) => {
    const amount = useSelector((state) =>
        selectProductAmountById(state, dish.id)
    );
    const dispatch = useDispatch();

    const handleDecrement = useCallback(() => {
        dispatch(decrement(dish.id));
    }, [dispatch, dish.id]);

    const handleIncrement = useCallback(() => {
        dispatch(increment(dish.id));
    }, [dispatch, dish.id]);

    return (

        <div className={styles.root}>
            <NavLink className={styles.link} to={`/dish/${dish.id}`}>
                <Dish dish={dish} className={className} />
            </NavLink>
            <div className={styles.buttonContainer}>
                <ButtonMemoized className={styles.button} onClick={handleDecrement} disabled={amount === 0}>-</ButtonMemoized>
                <p>{amount}</p>
                <ButtonMemoized className={styles.button} onClick={handleIncrement} disabled={amount === 5}>+</ButtonMemoized>
            </div>
        </div>
    );
};