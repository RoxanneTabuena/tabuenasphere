import { NavLink } from "react-router-dom"
import classes from "../Root.module.css"
import boom from "../../assets/gifs/about_boom.gif"

export const About = () => {
    return (
        <div>
            <img className={`${classes.boom}`} src={boom} alt="the dork that wrote this website"/>
            <img src="me" alt="the dork that wrote this website"/>
            <NavLink to="/about/bio">Bio</NavLink>
            <NavLink to="/about/causes">Causes</NavLink>
            <NavLink to="/about/interests">Interests</NavLink>
            <NavLink to="/about/skills">Skills</NavLink>
        </div>
    )
}