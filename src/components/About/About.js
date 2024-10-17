import { NavLink, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import classes from "../Root.module.css"
import boom from "../../assets/gifs/about_boom.gif"

export const About = () => {
    const [ transition, setTransition ] = useState(false)
    const {state: { from }} = useLocation('mini')
    
    useEffect(()=>{
        if(from === 'home'){setTransition(true)}
    },[from])

    return (
        <div>
            {transition && <img className={`${classes.boom}`} src={boom} alt="animation of a star exploding"/>}
            <img src="me" alt="the dork that wrote this website"/>
            <NavLink to="/about/bio">Bio</NavLink>
            <NavLink to="/about/causes">Causes</NavLink>
            <NavLink to="/about/interests">Interests</NavLink>
            <NavLink to="/about/skills">Skills</NavLink>
        </div>
    )
}