import { useState } from "react"
import classes from "./Star.module.css"
import menu_pic from "../assets/img/menu.png"
import menu_on from "../assets/gifs/menu_on.gif"
import menu_off from "../assets/gifs/menu_off.gif"

const catDirectory = {
    menu: {
        pic : <img src={menu_pic} className={`${classes.icon}`} alt="menu icon"/>,
        on : <img src={menu_on} className={`${classes.icon}`} alt="menu icon"/>,
        off : <img src={menu_off} className={`${classes.icon}`} alt="menu icon"/>
    },
    about: 'about_img',
    collab: 'collab_img',
    hire: 'hire_img',
    shop: 'shop_img',
    showcase: 'showcase_img',
    vlog: 'vlog_img'
}

export const Star = ({cat}) => {
    const [ img, setImg ] = useState('pic')
    const handleOver = () => {
        setImg('on')
    }
    const handleOut = () => {
        setImg('off')
    }
    return (<div onMouseOver={handleOver} onMouseOut={handleOut}>
                {catDirectory[cat][img]}
            </div>)
}