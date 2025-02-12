import Card from "./Card";

const cardData = [
    { id: 1, name: "Teeth Cleaning", description: "Professional teeth cleaning to maintain oral hygiene." },
    { id: 2, name: "Cavity Filling", description: "Safe and effective cavity treatments." },
    { id: 3, name: "Teeth Whitening", description: "Brighten your smile with our whitening services." },
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
