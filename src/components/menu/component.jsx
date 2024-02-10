
import { Dish } from "../dish/component";

export const Menu = ({ dishIds }) => {

    return (
        <>
            <h3>Меню</h3>
            <ul>
                {dishIds.map((dishId, index) => (
                    <li key={index}> 
                        <Dish dishId={dishId} />
                    </li>
                ))}
            </ul>
        </>
    );
};
