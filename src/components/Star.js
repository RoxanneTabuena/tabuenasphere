import classes from "./Star.module.css"
import menu_pic from "../assets/img/menu.png"
import menu_on from "../assets/gifs/menu_on.gif"
import menu_off from "../assets/gifs/menu_off.gif"
import about_pic from "../assets/img/about.png"
import about_on from "../assets/gifs/about_on.gif"
import about_off from "../assets/gifs/about_off.gif"
import collab_pic from "../assets/img/collab.png"
import collab_on from "../assets/gifs/collab_on.gif"
import collab_off from "../assets/gifs/collab_off.gif"
import hire_pic from "../assets/img/hire.png"
import hire_on from "../assets/gifs/hire_on.gif"
import hire_off from "../assets/gifs/hire_off.gif"
import shop_pic from "../assets/img/shop.png"
import shop_on from "../assets/gifs/shop_on.gif"
import shop_off from "../assets/gifs/shop_off.gif"
import showcase_pic from "../assets/img/showcase.png"
import showcase_on from "../assets/gifs/showcase_on.gif"
import showcase_off from "../assets/gifs/showcase_off.gif"
import vlog_pic from "../assets/img/vlog.png"
import vlog_on from "../assets/gifs/vlog_on.gif"
import vlog_off from "../assets/gifs/vlog_off.gif"

const catDirectory = {
    menu: {
        pic : <img src={menu_pic} className={`${classes.icon}`} alt="menu icon"/>,
        on : <img src={menu_on} className={`${classes.icon}`} alt="menu icon"/>,
        off : <img src={menu_off} className={`${classes.icon}`} alt="menu icon"/>
    },
    about: {
        pic : <img src={about_pic} className={`${classes.full}`} alt="about icon"/>,
        on : <img src={about_on} className={`${classes.full}`} alt="about icon"/>,
        off : <img src={about_off} className={`${classes.full}`} alt="about icon"/>
    },
    collab: {
        pic : <img src={collab_pic} className={`${classes.full}`} alt="collab icon"/>,
        on : <img src={collab_on} className={`${classes.full}`} alt="collab icon"/>,
        off : <img src={collab_off} className={`${classes.full}`} alt="collab icon"/>
    },
    hire: {
        pic : <img src={hire_pic} className={`${classes.full}`} alt="hire icon"/>,
        on : <img src={hire_on} className={`${classes.full}`} alt="hire icon"/>,
        off : <img src={hire_off} className={`${classes.full}`} alt="hire icon"/>
    },
    shop: {
        pic : <img src={shop_pic} className={`${classes.full}`} alt="shop icon"/>,
        on : <img src={shop_on} className={`${classes.full}`} alt="shop icon"/>,
        off : <img src={shop_off} className={`${classes.full}`} alt="shop icon"/>
    },
    showcase: {
        pic : <img src={showcase_pic} className={`${classes.full}`} alt="showcase icon"/>,
        on : <img src={showcase_on} className={`${classes.full}`} alt="showcase icon"/>,
        off : <img src={showcase_off} className={`${classes.full}`} alt="showcase icon"/>
    },
    vlog: {
        pic : <img src={vlog_pic} className={`${classes.full}`} alt="vlog icon"/>,
        on : <img src={vlog_on} className={`${classes.full}`} alt="vlog icon"/>,
        off : <img src={vlog_off} className={`${classes.full}`} alt="vlog icon"/>
    },
}

export const Star = ({cat, img}) => {

    return (<div>
                {catDirectory[cat][img]}
            </div>)
}