import { MenuItem } from "./menuItem/component";

export const Menu = ({ menu }) => {
    return (
        <>
            <h3>Меню</h3>
            <ul>
                {menu.map((menuItem) => (
                    <li> 
                    <MenuItem name={menuItem.name} />
                    </li>
                ))}
            </ul>
        </>
    );
};
