import { useParams, NavLink } from "react-router-dom"
export const Rundown = () => {
    const { rundown } = useParams()
    return (
        <div>
            <p>{rundown}</p>
            <NavLink to={`/book/${rundown}`}>
                <p className="book">book</p>
            </NavLink>
        </div>
    )
}