import { Dish } from "../dish/component"

export const Cart = ({productIds}) => {
    return <div>
        {productIds?.length ? (productIds.map((productId) => <Dish key={productId} dishId={productId} /> ))
            : "Empty"}  
    </div>

}