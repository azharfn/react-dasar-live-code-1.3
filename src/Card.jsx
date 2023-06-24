import React from "react";

const Card = ({ data }) => {
    const { imageUrl, name, residence, rank, affiliation } = data;
    {/* TODO: answer here */}
    return (
        <div className="character-card" data-testid="card">
            <img src={imageUrl} alt={name} data-testid="card-image" />
            <p data-testid="residence">{residence}</p>
            <p data-testid="name">{name}</p>
            <p data-testid="affiliation">{affiliation}</p>
            <p data-testid="rank">{rank}</p>
        </div>
    );
};

export default Card;
