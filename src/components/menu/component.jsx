import { DishContainer } from "../dish/container";

export const Menu = ({ dishIds }) => {

    return (
        <>
            <h3>Меню</h3>
            <ul>
                {dishIds.map((dishId, index) => (
                    <li key={index}> 
                        <DishContainer dishId={dishId} />
                    </li>
                ))}
            </ul>
        </>
    );
};
