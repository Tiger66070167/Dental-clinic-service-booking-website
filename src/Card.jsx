import { FaTooth } from "react-icons/fa";
const Card = ({ title, description }) => {
    return (
            <div className="card">
            <FaTooth size={24}/>
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
        );
};

export default Card;
