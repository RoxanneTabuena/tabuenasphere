import { NavLink } from "react-router-dom"
export const Collab = () => {
    return (
        <div>
            <NavLink to="/artists">Artists</NavLink>
            <NavLink to="/developers">Developers</NavLink>
        </div>
    )
}