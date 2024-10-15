import { useParams } from "react-router-dom"
export const Book = () => {
    const { type } = useParams()
return (
    <div>
        <h4>{type}</h4>
        <p>Booking Form</p>
    </div>
)
}