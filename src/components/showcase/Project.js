// render a project display based on a chosen project
import { useParams } from "react-router-dom"
import classes from "./Showcase.module.css"
import { projectDirectory } from "./ProjectUtils"

export const Project = () => {
    const { project } = useParams()

    return (
        <div>
          <h2 className={`${projectDirectory[project].theme}`}>{project}</h2>
          {projectDirectory[project].demo}
          <div className={`${classes.proj}`}>
            <div className={`${classes.col1}`}>
            </div>
            <div className={`${classes.col2}`}>
              <div className={`${classes.tags}` }>
                  {projectDirectory[project].tech.map((tech)=>{
                    return <p className={`${classes.tag} ${projectDirectory[project].theme}`}>{tech}</p>
                  })}
              </div>
            </div>
          </div>
        </div>
    )
}