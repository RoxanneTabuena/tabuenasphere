import { NavLink, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import classes from "../Root.module.css"
import boom from "../../assets/gifs/vlog_boom.gif"

export const Vlog = () => {
    const [ transition, setTransition ] = useState(false)
    const {state: { from }} = useLocation('mini')
    
    // replace with entries array
    const entry = 'x'
    useEffect(()=>{
        if(from === 'home'){setTransition(true)}
    },[from])

    return (
        <div>
            {transition && <img className={`${classes.boom}`} src={boom} alt="animation of a star exploding"/>}
            <NavLink to={`/vlog/${entry}`}>{entry}</NavLink>
        </div>
    )
}