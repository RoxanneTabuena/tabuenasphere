import { NavLink } from "react-router-dom"
export const Team = () => {
    return (
        <div>
            <h2>Im down for the mission!</h2>
            <p>explanation of services</p>
            <NavLink to="/book"><p className="book">Request a Resume</p></NavLink>
        </div>
    )
}