import { useEffect, useState } from "react";
import api from "../utils/api";
import Card from '../Card/Card';

 function Main ({onEditProfile, onAddPopup, onAvatar, onCard }) {
  const [userName, setUserName] = useState()
  const [userDescription, setUserDescription] = useState()
  const [userAvatar, setUserAvatar] = useState()
  const [card, setCard] = useState([])

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
    .then(([user, dataCards]) => {
      setUserName(user.name)
      setUserDescription(user.about)
      setUserAvatar(user.avatar)
      dataCards.forEach(() => {
                setCard(dataCards)
      })
    })
    .catch(console.error)
  }, [])
  return (
    <main className="main">
          <section className="profile">
            <button type="button" className="profile__avatar-button" onClick={onAvatar} >
              <img className="profile__avatar" src={userAvatar} alt="Аватар" />
            </button>
            <div className="profile__container">
              <div className="profile__info">
                <div className="profile__stripe">
                  <h1 className="profile__name">{userName}</h1>
                  <button
                    className="open-button profile__edit-button"
                    type="button"
                    onClick={onEditProfile}
                  ></button>
                </div>
                <p className="profile__profession">{userDescription}</p>
              </div>
              <button
                className="open-button profile__add-button"
                type="button"
                onClick={onAddPopup}
              ></button>
            </div>
          </section>
          <section className="elements">
            <ul className="elements__container">{card.map(data => {
            return (
              <li className="elements__grid-item">
            <Card card={data} onCard={onCard}/>
            </li>)
            })}
            </ul>
          </section>
        </main>
  )
}

export default Main;