function Card ( {card, onCard} ) {
  return (
    
      <div className="elements__item">
        <button className="elements__delete-icon" type="button"></button>
        <img className="elements__grid-photo" src={card.link} alt={card.name} onClick={() => onCard({name: card.name, link: card.link})}/>
        <div className="elements__titles">
          <h2 className="elements__grid-text">{card.name}</h2>
          <div className="elements__like-span">
            <button className="elements__grid-vector" type="button"></button>
            <span className="elements__counter">0</span>
          </div>
        </div>
      </div>
   
  )
}

export default Card;