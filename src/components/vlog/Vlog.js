import { NavLink } from "react-router-dom"
export const Vlog = () => {
    // replace with entries array
    const entry = 'x'
    return (
        <div>
            <NavLink to={`/vlog/${entry}`}>{entry}</NavLink>
        </div>
    )
}