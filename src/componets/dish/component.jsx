import style from './styles.module.scss';
import { Button } from '../button/component';
import { useState } from 'react';

export const Dish = ({ name }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className={style.root}>
            {name}
            <div className={style.buttonContainer}>
                <Button className={style.button} onClick={decrement} disabled={count === 0}>-</Button>
                <p>{count}</p>
                <Button className={style.button} onClick={increment} disabled={count === 5}>+</Button>
            </div>
        </div>
    );
};
