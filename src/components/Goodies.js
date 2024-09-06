import { NavLink } from "react-router-dom"
export const About = () => {
    return (
        <div>
            <img src="me" alt="the dork that wrote this website"/>
            <NavLink to="/bio">Bio</NavLink>
            <NavLink to="/causes">Causes</NavLink>
            <NavLink to="/interests">Interests</NavLink>
            <NavLink to="/skills">Skills</NavLink>
        </div>
    )
}