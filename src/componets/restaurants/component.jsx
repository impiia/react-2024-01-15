import { Restaurant } from "../restaurant/component"

export const Restaurants = ({ restaurants }) => {
    return (
        <div>
        {restaurants.map((restaurant) => (
            <Restaurant restaurant={restaurant} />
        ))}
        </div>
    )
}
