import { useParams } from "react-router-dom";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";
import { Loader } from "../loader/component";
import { Menu } from "./component";

export const MenuContainer = () => {
    const restaurantId = useParams().restaurantId;
    const { data: dishes, isLoading } = useGetDishesByRestaurantIdQuery(restaurantId);
    if (isLoading) {
        return <Loader />;
    }
    return (
        <>
            {isLoading ? <Loader /> : <Menu dishes={dishes} />}
        </>
    );
};
