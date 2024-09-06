import { NavLink } from "react-router-dom"
export const Hire = () => {
    return (
        <div>
            <img src="me" alt="the dork that wrote this website"/>
            <NavLink to="/team">Add me to your team</NavLink>
            <NavLink to="/contract">Contract me</NavLink>
        </div>
    )
}