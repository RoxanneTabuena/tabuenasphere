import classes from "./Star.module.css"
import menu_pic from "../assets/img/menu.png"
import menu_on from "../assets/gifs/menu_on.gif"
import menu_off from "../assets/gifs/menu_off.gif"
import collab_pic from "../assets/img/collab.png"
import collab_on from "../assets/gifs/collab_on.gif"
import collab_off from "../assets/gifs/collab_off.gif"

const catDirectory = {
    menu: {
        pic : <img src={menu_pic} className={`${classes.icon}`} alt="menu icon"/>,
        on : <img src={menu_on} className={`${classes.icon}`} alt="menu icon"/>,
        off : <img src={menu_off} className={`${classes.icon}`} alt="menu icon"/>
    },
    about: 'about_img',
    collab: {
        pic : <img src={collab_pic} className={`${classes.full}`} alt="collab icon"/>,
        on : <img src={collab_on} className={`${classes.full}`} alt="collab icon"/>,
        off : <img src={collab_off} className={`${classes.full}`} alt="collab icon"/>
    },
    hire: 'hire_img',
    shop: 'shop_img',
    showcase: 'showcase_img',
    vlog: 'vlog_img'
}

export const Star = ({cat, img}) => {

    return (<div>
                {catDirectory[cat][img]}
            </div>)
}