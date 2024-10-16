import classes from './Home.module.css'
import { HomeItem } from './HomeItem'
import { useState } from "react"


export const Home = () => {
    const [ aboutImg, setAboutImg ] = useState('pic')
    const [ collabImg, setCollabImg ] = useState('pic')
    const [ hireImg, setHireImg ] = useState('pic')
    const [ shopImg, setShopImg ] = useState('pic')
    const [ showcaseImg, setShowcaseImg ] = useState('pic')
    const [ vlogImg, setVlogImg ] = useState('pic')
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
    return (
        <div className={`${classes.grid}`}>
            <div className={`${classes.about}`}><p>about</p></div>
            <div className={`${classes.showcase}`}><p>showcase</p></div>
            <div className={`${classes.shop}`}><p>shop</p></div>
            <div className={`${classes.vlog}`}><p>vlog</p></div>
            <div className={`${classes.collab}`} onMouseOver={()=> handleOver('collab')} onMouseOut={()=> handleOut('collab')}>
                <HomeItem cat="collab" img={collabImg}/>
            </div>
            <div className={`${classes.hire}`}><p>hire</p></div>
        </div>
    )
}