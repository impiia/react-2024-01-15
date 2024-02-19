import { useSelector } from "react-redux"
import { selectCartProductIds } from "../../redux/ui/cart"
import { Cart } from "./component";

export const CartContainer = () => {
    const dishIds = useSelector(selectCartProductIds);
    return <Cart productIds={dishIds} />
}