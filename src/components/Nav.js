import { useState } from "react"
import menuImg from "../assets/img/menu.png"
import {NavItem} from "../components/NavItem"
import classes from "./Nav.module.css"
import on from "../assets/gifs/menu_on.gif"
import off from "../assets/gifs/menu_off.gif"


export const Nav = () => {
    const [ open, setOpen ] = useState(false)
    const [ menu, setMenu ] = useState('pic')

    const menu_img = {
        pic : <img className={`${classes.menu_icon}`} src={menuImg} alt="menu icon"/>,
        on : <img className={`${classes.menu_icon}`} src={on} alt="menu icon"/>,
        off : <img className={`${classes.menu_icon}`} src={off} alt="menu icon"/>
    }
    const display = open === false ?  menu_img[menu] :
        <div>
            {menu_img[menu]}
            <div className={`${classes.menu}`}>
                <NavItem category="about"/>
                <NavItem category="collab"/> 
                <NavItem category="hire"/>
                <NavItem category="shop"/>
                <NavItem category="showcase"/>
                <NavItem category="vlog"/>
            </div>
        </div>
    const handleNavClick = () => {
        open === false ? setOpen(true) : setOpen(false)
    }
    const handleNavOver = () => {
        setMenu('on')
    }
    const handleNavOut = () => {
        setMenu('off')
    }
    return (
        <div className={`${classes.nav}`} onClick={handleNavClick} onMouseOver={handleNavOver} onMouseOut={handleNavOut}>
           {display}
        </div>
    )
}