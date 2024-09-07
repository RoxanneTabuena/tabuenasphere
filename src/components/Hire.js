import { NavLink } from "react-router-dom"
export const Hire = () => {
    return (
        <div>
            <img src="me" alt="the dork that wrote this website"/>
            <NavLink to="/hire/team">Add me to your team</NavLink>
            <NavLink to="/hire/contract">Contract me</NavLink>
        </div>
    )
}