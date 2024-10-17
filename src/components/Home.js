import classes from './Home.module.css'
import { useState } from "react"
import { Star } from './Star'
import { NavLink, useNavigate } from 'react-router-dom'


export const Home = () => {
    const [ aboutImg, setAboutImg ] = useState('pic')
    const [ collabImg, setCollabImg ] = useState('pic')
    const [ hireImg, setHireImg ] = useState('pic')
    const [ shopImg, setShopImg ] = useState('pic')
    const [ showcaseImg, setShowcaseImg ] = useState('pic')
    const [ vlogImg, setVlogImg ] = useState('pic')
    const navigate = useNavigate()
    const handleDirectory = {
        about : setAboutImg,
        collab : setCollabImg,
        hire : setHireImg,
        shop : setShopImg,
        showcase : setShowcaseImg,
        vlog : setVlogImg,
    }
    const handleOver = (cat) => {
        handleDirectory[cat]('on')
    }
    const handleOut = (cat) => {
        handleDirectory[cat]('off')
    }
    const handleBoom = (cat) => {
        navigate(`/${cat}`, {state: {from: 'home'}})
    }
    return (
        <div className={`${classes.grid}`}>
            <div className={`${classes.about}`} onMouseOver={()=> handleOver('about')} onMouseOut={()=> handleOut('about')} onPointerOver={()=>handleOver('about')} onPointerOut={()=>handleOut('about')}>
                <div className={`${classes.top}`} onClick={()=> handleBoom('about')}>
                </div>
                <Star cat="about" img={aboutImg}/>
            </div>
            <div className={`${classes.collab}`} onMouseOver={()=> handleOver('collab')} onMouseOut={()=> handleOut('collab')} onPointerOver={()=>handleOver('collab')} onPointerOut={()=>handleOut('collab')}>
                <NavLink to="/collab">
                    <div className={`${classes.top}`}>
                    </div>
                </NavLink>
                <Star cat="collab" img={collabImg}/>
            </div>
            <div className={`${classes.hire}`} onMouseOver={()=> handleOver('hire')} onMouseOut={()=> handleOut('hire')} onPointerOver={()=>handleOver('hire')} onPointerOut={()=>handleOut('hire')}>
                <NavLink to="/hire">
                    <div className={`${classes.top}`}>
                    </div>
                </NavLink>
                <Star cat="hire" img={hireImg}/>
            </div>
            <div className={`${classes.shop}`} onMouseOver={()=> handleOver('shop')} onMouseOut={()=> handleOut('shop')} onPointerOver={()=>handleOver('shop')} onPointerOut={()=>handleOut('shop')}>
                <NavLink to="/shop">
                    <div className={`${classes.top}`}>
                    </div>
                </NavLink>
                <Star cat="shop" img={shopImg}/>
            </div>
            <div className={`${classes.showcase}`} onMouseOver={()=> handleOver('showcase')} onMouseOut={()=> handleOut('showcase')} onPointerOver={()=>handleOver('showcase')} onPointerOut={()=>handleOut('showcase')}>
                <NavLink to="/showcase">
                    <div className={`${classes.top}`}>
                    </div>
                </NavLink>
                <Star cat="showcase" img={showcaseImg}/>
            </div>
            <div className={`${classes.vlog}`} onMouseOver={()=> handleOver('vlog')} onMouseOut={()=> handleOut('vlog')} onPointerOver={()=>handleOver('vlog')} onPointerOut={()=>handleOut('vlog')}>
                <NavLink to="/vlog">
                    <div className={`${classes.top}`}>
                    </div>
                </NavLink>
                <Star cat="vlog" img={vlogImg}/>
            </div>
        </div>
    )
}