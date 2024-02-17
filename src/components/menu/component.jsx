import { DishContainer } from "../dish/container";

export const Menu = ({ dishes }) => {

    return (
        <>
            <h3>Меню</h3>
            <ul>
                {dishes?.map((dish) => {
                    return (
                        <li key={dish.id}>
                            <DishContainer dish={dish} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
