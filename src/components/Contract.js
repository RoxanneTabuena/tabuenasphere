import { NavLink } from "react-router-dom"
export const Contract = () => {
    return (
        <div>
            <h2>At your service...</h2>
            <p>explanation of services</p>
            <NavLink to="/book"><p className="book">Book a consult</p></NavLink>
        </div>
    )
}