import styles from './styles.module.scss';
import { Button } from '../button/component';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectProductAmountById } from '../../redux/ui/cart';
import { Dish } from './component';
import { NavLink } from 'react-router-dom';

export const DishContainer = ({ dish, className }) => {
    const amount = useSelector((state) =>
        selectProductAmountById(state, dish.id)
    );
    const dispatch = useDispatch();

    return (

        <div className={styles.root}>
            <NavLink className={styles.link} to={`/dish/${dish.id}`}>
                <Dish dish={dish} className={className} />
            </NavLink>
            <div className={styles.buttonContainer}>
                <Button className={styles.button} onClick={() => dispatch(decrement(dish.id))} disabled={amount === 0}>-</Button>
                <p>{amount}</p>
                <Button className={styles.button} onClick={() => dispatch(increment(dish.id))} disabled={amount === 5}>+</Button>
            </div>
        </div>
    );
};