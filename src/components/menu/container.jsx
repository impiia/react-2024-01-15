import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";
import { Loader } from "../loader/component";
import { Menu } from "./component";

export const MenuContainer = ({ restaurantId }) => {
    const { data: dishes, isLoading } = useGetDishesByRestaurantIdQuery(restaurantId);

    return (
        <>
            {isLoading ? <Loader /> : <Menu dishes={dishes} />}
        </>
    );
};
