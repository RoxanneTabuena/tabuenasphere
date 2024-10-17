import { NavLink, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import classes from "../Root.module.css"
import boom from "../../assets/gifs/collab_boom.gif"

export const Collab = () => {
    const [ transition, setTransition ] = useState(false)
    const {state: { from }} = useLocation('mini')
    
    useEffect(()=>{
        if(from === 'home'){setTransition(true)}
    },[from])

    return (
        <div>
            {transition && <img className={`${classes.boom}`} src={boom} alt="animation of a star exploding"/>}
            <NavLink to="/collab/artists">Artists</NavLink>
            <NavLink to="/collab/developers">Developers</NavLink>
        </div>
    )
}