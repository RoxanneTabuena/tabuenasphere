import { useParams } from 'react-router-dom'
export const Entry = () =>{
    const { entry } = useParams()
    return (
        <div>
            <p>{entry}</p>
        </div>
    )
}