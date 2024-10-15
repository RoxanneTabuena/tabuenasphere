// render a project display based on a chosen project
import { useParams } from "react-router-dom"
export const Project = () => {
    const { project } = useParams()
    return (
        <div>
          <p>{project}</p>  
        </div>
    )
}