import { Link, NavLink, Outlet } from 'react-router-dom'
import classes from './Root.module.css'
import me from '../assets/gifs/resting.gif'
import { Nav } from '../components/Nav'


export const Root = () => {

    return (
        <div>
            <header>
                <div className={`${classes.banner} title`}>
                    <NavLink to="/"><h1>Roxanne Tabuena</h1></NavLink>
                    <ul>
                        <li><h3>Front-End Developer</h3></li>
                        <li><h3>3D Creator</h3></li>
                        <li><h3>Community Organizer</h3></li>
                    </ul>
                </div>
                <nav>
                    <Nav />
                </nav>
            </header>
                <Outlet/>
            <footer>
                <img src={me} alt="developer working on a laptop"/>
                <div className="links">
                    <Link to="{email}">
                        <img src="{email}" alt="email icon" />
                    </Link>
                    <Link to="{sketchfab}">
                        <img src="{sketchfab}" alt="sketchfab icon" />
                    </Link>
                    <Link to="{linkedin}">
                        <img src="{linkedin}" alt="linkedin icon" />
                    </Link>
                    <Link to="{github}">
                        <img src="{github}" alt="github icon" />
                    </Link>
                    <Link to="{collabz}">
                        <img src="{collabz}" alt="collabz icon" />
                    </Link>
                </div>
            </footer>
        </div>
    )
}