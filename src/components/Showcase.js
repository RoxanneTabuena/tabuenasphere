import { NavLink } from "react-router-dom"
export const Showcase = () => {
    return (
        <div>
            <NavLink to="/project">
                <img src="logo-x" alt="logo for project x"/>
                <div className="project">
                    <h5>Project Title</h5>
                    <p>explanation</p>
                </div>
            </NavLink>
        </div>
    )
}