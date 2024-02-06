import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
    return (
        <>
            <h3>Меню</h3>
            <ul>
                {menu.map((dish, index) => (
                    <li key={index}> 
                        <Dish dish={dish} />
                    </li>
                ))}
            </ul>
        </>
    );
};
