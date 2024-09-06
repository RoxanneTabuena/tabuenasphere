import { NavLink } from "react-router-dom"
export const Developers = () => {
    return (
        <div>
            <h2>Lets Build!</h2>
            <p>explanation of services</p>
            <NavLink to="/book"><p className="book">Let's Talk</p></NavLink>
        </div>
    )
}