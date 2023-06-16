export default function PopupWithForm (props) {
  return (
    <div className={`popup popup_place_${props.name} ${props.isOpen && 'popup_opened'}`}>
          <div className="popup__container">
            <form
              className="popup__form"
              action="#"
              >
              <fieldset className="popup__info">
                <h2 className="popup__title">{props.title}</h2>
                            </fieldset>
                            {props.children}
              <button
                className="popup__submit"
                type="submit"
              >
               {props.button}
              </button>
            </form>
            <button
              className="popup__close-icon"
              type="button" onClick={props.onClose}
            ></button>
          </div>
        </div>
  )
}