import { NavLink } from "react-router-dom"
import { AddToCart } from "./AddToCart"
// render an item details page based on the user selected item
export const Item = () => {
    return (
        <div>
            <NavLink to="checkout">checkout</NavLink>
            <p>item</p>
            <AddToCart />
        </div>
    )
}