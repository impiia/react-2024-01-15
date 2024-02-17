import { DishCartContainer } from "../dish/cart-container";

export const Cart = ({ productIds }) => {
    return (
        <div>
            {productIds.map((id) => (
                <DishCartContainer key={id} dishId={id} />
            ))}
        </div>
    );
};

