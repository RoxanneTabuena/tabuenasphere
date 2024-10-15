import { useState } from "react"
import menuImg from "../assets/img/menu.png"
import {NavItem} from "../components/NavItem"

export const Nav = () => {
    const [ open, setOpen ] = useState(true)
    const display = open === false ?  <img src={menuImg} alt="menu icon"/> :
        <div>
            <NavItem category="about"/>
            <NavItem category="collab"/>
            <NavItem category="hire"/>
            <NavItem category="shop"/>
            <NavItem category="showcase"/>
            <NavItem category="vlog"/>
        </div>
    return (
        <div>
           {display}
        </div>
    )
}