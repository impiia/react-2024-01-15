import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
    return (
        <>
            <h3>Меню</h3>
            <ul>
                {menu.map((dish) => (
                    <li> 
                    <Dish name={dish.name} />
                    </li>
                ))}
            </ul>
        </>
    );
};
