import { NavLink } from "react-router-dom"
export const Store = () => {
    // replace ith items array
    const item = 'x'
    return (
        <div>
            <NavLink to={`/store/${item}`}>{item}</NavLink>
        </div>
    )
}