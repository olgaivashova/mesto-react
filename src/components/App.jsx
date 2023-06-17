import Header from "./header/Header";
import Main from "./Main/Main";
import Footer from "./footer/Footer";
import PopupWithForm from "./popupWithForm/PopupWithForm";
import ImagePopup from "./imagePopup/ImagePopup";
import { useState } from "react";

function App() {
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [imagePopup, setImagePopup] = useState(false);

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(!isAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPopupOpen(!isAddPopupOpen);
  }
  function handleImageClick(card) {
    setSelectedCard(card);
    setImagePopup(!imagePopup);
  }
  function closeAllPopups() {
    setIsAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPopupOpen(false);
    setImagePopup(false);
  }

  return (
    <div className="App">
      <div className="page__content">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPopup={handleAddPlaceClick}
          onAvatar={handleEditAvatarClick}
          onCard={handleImageClick}
        />
        <Footer />
        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          button=""
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__form-field">
            <input
              id="name-input"
              type="text"
              className="popup__input popup__input_type_name"
              name="name"
              placeholder="Имя"
            />
            <span className="popup__input-error name-input-error"></span>
          </label>
          <label className="popup__form-field">
            <input
              id="about-input"
              type="text"
              className="popup__input popup__input_type_job"
              name="job"
              placeholder="О себе"
            />
            <span className="popup__input-error about-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="add"
          title="Новое место"
          button="Создать"
          isOpen={isAddPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__form-field">
            <input
              id="title-input"
              type="text"
              className="popup__input popup__input_type_title"
              name="title"
              placeholder="Название"
            />
            <span className="popup__input-error title-input-error"></span>
          </label>
          <label className="popup__form-field">
            <input
              id="link-input"
              type="url"
              className="popup__input popup__input_type_link"
              name="link"
              placeholder="Ссылка на картинку"
            />
            <span className="popup__input-error link-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="save-avatar"
          title="Обновить аватар"
          button=""
          isOpen={isAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__form-field">
            <input
              id="avatar-input"
              type="url"
              className="popup__input popup__input_type_avatar"
              name="avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error avatar-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name="delete" title="Вы уверены?" button="Да" />
        <ImagePopup
          card={selectedCard}
          isOpen={imagePopup}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
