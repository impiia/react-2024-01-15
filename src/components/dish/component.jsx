import style from './styles.module.scss';
import { Button } from '../button/component';
import { useState } from 'react';

export const Dish = ({ dish }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
            setCount(count + 1);
    };

    const decrement = () => {
            setCount(count - 1);
    };

    return (
        <div className={style.root}>
            <div>{dish.name}</div>
            <div>{dish.price}</div>
            <div className={style.buttonContainer}>
                <Button className={style.button} onClick={decrement} disabled={count === 0}>-</Button>
                <p>{count}</p>
                <Button className={style.button} onClick={increment} disabled={count === 5}>+</Button>
            </div>
        </div>
    );
};
