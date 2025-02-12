import Card from "./Card";


const cardData = [
    { id: 1, name: "Teeth Cleaning", icon: <FaTooth size={24} />, description: "Professional teeth cleaning to maintain oral hygiene." },
    { id: 2, name: "Cavity Filling", icon: <FaTooth size={24} />, description: "Safe and effective cavity treatments." },
    { id: 3, name: "Teeth Whitening", icon: <FaTooth size={24} />, description: "Brighten your smile with our whitening services." },
    ];

const CardContainer = () => {
    return (
        <div className="card-container">
        {cardData.map((card) => (
            <Card key={card.id} title={card.title} description={card.description} />
        ))}
        </div>
    );
};

export default CardContainer;
