import { NavLink } from "react-router-dom"
export const Showcase = () => {
    // replace with a mapped projects array
    const project = 'x'
    return (
        <div>
            <NavLink to={`/showcase/${project}`}>
                <img src={`logo-${project}`} alt={`logo for ${project}`}/>
                <div className="project">
                    <h5>{project}</h5>
                    <p>explanation</p>
                </div>
            </NavLink>
        </div>
    )
}