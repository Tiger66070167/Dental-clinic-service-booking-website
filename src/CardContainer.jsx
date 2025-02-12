import Card from "./Card";

const CardContainer = () => {
    return (
        <div className="card-container">
        <Card title="Card 1" description="This is the first card." />
        <Card title="Card 2" description="This is the second card." />
        <Card title="Card 3" description="This is the third card." />
        </div>
    );
};

export default CardContainer;
