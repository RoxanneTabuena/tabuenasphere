import { NavLink } from 'react-router-dom'
import about from '../assets/img/star_about.png'
import collab from '../assets/img/star_collab.png'
import hire from '../assets/img/star_hire.png'
import shop from '../assets/img/star_shop.png'
import showcase from '../assets/img/star_showcase.png'
import vlog from '../assets/img/star_vlog.png'
import classes from '../components/NavItem.module.css'

export const NavItem = ( {cat} ) => {
    const imgs = {
        about : about,
        collab : collab,
        hire : hire,
        shop : shop,
        showcase : showcase,
        vlog : vlog
    }
    
    return (
        <div className={`${classes.navItem}`}>
            <img src={imgs[cat]} alt="star icon" />
            <NavLink to={cat} state={{ from:"mini" }}>{cat}</NavLink>
        </div>
    )

}