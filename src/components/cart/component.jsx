import { DishContainer } from "../dish/container"

export const Cart = ({productIds}) => {
    return <div>
        {productIds?.length ? (productIds.map((productId) => <DishContainer key={productId} dishId={productId} /> ))
            : "Empty"}  
    </div>

}