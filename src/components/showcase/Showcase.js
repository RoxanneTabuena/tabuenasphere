import { NavLink, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { ProjectMini } from "./ProjectMini"
import classes from "../Root.module.css"
import boom from "../../assets/gifs/showcase_boom.gif"

export const Showcase = () => {
    const [ transition, setTransition ] = useState(false)
    const {state: { from }} = useLocation('mini')
    
    useEffect(()=>{
        if(from === 'home'){setTransition(true)}
    },[from])

    return (
        <div>
            {transition && <img className={`${classes.boom}`} src={boom} alt="animation of a star exploding"/>}
            <NavLink to={`/showcase/timezones`}>
                <ProjectMini project='timezones' />
            </NavLink>
        </div>
    )
}