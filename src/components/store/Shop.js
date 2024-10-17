import { NavLink, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import classes from "../Root.module.css"
import boom from "../../assets/gifs/shop_boom.gif"

export const Shop = () => {
    const [ transition, setTransition ] = useState(false)
    const {state: { from }} = useLocation('mini')
    
    // replace ith items array
    const item = 'x'
    useEffect(()=>{
        if(from === 'home'){setTransition(true)}
    },[from])

    return (
        <div>
            {transition && <img className={`${classes.boom}`} src={boom} alt="animation of a star exploding"/>}
            <NavLink to={`/store/${item}`}>{item}</NavLink>
        </div>
    )
}