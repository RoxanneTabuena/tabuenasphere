// render an article based on the user selected topic
import { useParams } from "react-router-dom"

export const Topic = () => {
    const {topic} = useParams()
    return <div><p>{topic}</p></div>
}