import { NavLink } from "react-router-dom"
import { Star } from "./Star"

export const HomeItem = ({cat, img}) => {
    return (
        <div>
            <NavLink to={cat}>
                <Star cat={cat} img={img}/>
            </NavLink>
        </div>
    )
}