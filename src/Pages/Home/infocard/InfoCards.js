import React from 'react';

const InfoCards = ({card}) => {
    console.log(card)
    const {bgclass, name , description,icon, } = card;
    return (
        <div className={`card md:card-side p-6 text-white shadow-xl ${bgclass}`}>
  <figure><img src={icon} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    
  </div>
</div>
    );
};

export default InfoCards;