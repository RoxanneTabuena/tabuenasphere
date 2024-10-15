import { NavLink } from "react-router-dom"
export const Collab = () => {
    return (
        <div>
            <NavLink to="/collab/artists">Artists</NavLink>
            <NavLink to="/collab/developers">Developers</NavLink>
        </div>
    )
}