import classes from "./Showcase.module.css"
import { projectDirectory } from "./ProjectUtils"

  export const ProjectMini = ({ project }) => {
    return (
        <div className={`${classes.mini}`}>
            {projectDirectory[project].logo}
            <div>
            <h2 className={`${projectDirectory[project].theme}`}>{project}</h2>
            <div className={`${classes.tags}` }>
                {projectDirectory[project].tech.map((tech)=>{
                   return <p className={`${classes.tag} ${projectDirectory[project].theme}`}>{tech}</p>
                })}
            </div>
            </div>
        </div>
    )
} 