import { NavLink } from "react-router-dom"
export const About = () => {
    return (
        <div>
            <img src="me" alt="the dork that wrote this website"/>
            <NavLink to="/about/bio">Bio</NavLink>
            <NavLink to="/about/causes">Causes</NavLink>
            <NavLink to="/about/interests">Interests</NavLink>
            <NavLink to="/about/skills">Skills</NavLink>
        </div>
    )
}