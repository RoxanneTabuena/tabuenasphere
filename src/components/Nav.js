import { useState } from "react"
import {NavItem} from "../components/NavItem"
import classes from "./Nav.module.css"
import { Star } from "../components/Star"

export const Nav = () => {
    const [ open, setOpen ] = useState(false)
    const [ img, setImg ] = useState('pic')

    const handleNavClick = () => {
        open === false ? setOpen(true) : setOpen(false)
    }
    const handleOver = () => {
        setImg('on')
    }
    const handleOut = () => {
        setImg('off')
    }
    return (
        <div className={`${classes.nav}`} onClick={handleNavClick}>
          <div onMouseOver={handleOver} onMouseOut={handleOut}>
            <Star cat="menu" img={img} />
          </div>
          {open && (
            <div className={`${classes.menu}`}>
              {["about", "collab", "hire", "shop", "showcase", "vlog"].map((cat) => (
                <NavItem key={cat} cat={cat} />
              ))}
            </div>
          )}
        </div>
    )
}