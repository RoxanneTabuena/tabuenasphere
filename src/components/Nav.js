import { useState } from "react"
import {NavItem} from "../components/NavItem"
import classes from "./Nav.module.css"
import { Star } from "../components/Star"

export const Nav = () => {
    const [ open, setOpen ] = useState(false)

    const display = open === false ?  <Star cat="menu"/> :
        <div>
            <Star cat="menu"/>
            <div className={`${classes.menu}`}>
                <NavItem cat="about"/>
                <NavItem cat="collab"/> 
                <NavItem cat="hire"/>
                <NavItem cat="shop"/>
                <NavItem cat="showcase"/>
                <NavItem cat="vlog"/>
            </div>
        </div>
    const handleNavClick = () => {
        open === false ? setOpen(true) : setOpen(false)
    }

    return (
        <div className={`${classes.nav}`} onClick={handleNavClick}>
           {display}
        </div>
    )
}