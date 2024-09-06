import { NavLink } from "react-router-dom"
export const Artists = () => {
    return (
        <div>
            <h2>Free Business Growth Services!</h2>
            <p>explanation of services</p>
            <NavLink to="/book"><p className="book">I'm in!</p></NavLink>
        </div>
    )
}