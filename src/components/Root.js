import { Link, NavLink, Outlet } from 'react-router-dom'

export const Root = () => {
    return (
        <div>
            <header>
                <h1>Roxanne Tabuena</h1>
                <ul>
                    <li><h3>Front-End Developer</h3></li>
                    <li><h3>3D Artist</h3></li>
                    <li><h3>Community Organizer</h3></li>
                </ul>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/collab">Collab</NavLink>
                <NavLink to="/email">Email</NavLink>
                <NavLink to="/goodies">Goodies</NavLink>
                <NavLink to="/hire">Hire</NavLink>
                <NavLink to="/showcase">Showcase</NavLink>
                <NavLink to="/store">Store</NavLink>
                <NavLink to="/vlog">Vlog</NavLink>
            </header>
                <Outlet/>
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
        </div>
    )
}