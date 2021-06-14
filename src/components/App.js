import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import { popupSelectors } from '../utils/utils';

import { CurrentUserProvider } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);

    setSelectedCard({});
  }

  function handlePopupClick(e) {
    if (e.target === e.currentTarget || e.target.classList.contains(popupSelectors.closeButtonClass)) {
      closeAllPopups();
    }
  }

  const escHandler = React.useCallback(e => {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener('keydown', escHandler, false);

    return () =>
      document.removeEventListener('keydown', escHandler, false);
  }, [escHandler]);

  return (
    <CurrentUserProvider>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={handlePopupClick} title="Редактировать профиль" name="profile-editor">
        <input type="text" autoComplete="name" autoCapitalize="words" className="popup__input" name="name" id="profile-name" placeholder="Имя" minLength="2" maxLength="40" required />
        <p className="popup__error" id="profile-name-error" />

        <input type="text" className="popup__input" name="about" id="profile-about" placeholder="О себе" minLength="2" maxLength="200" required />
        <p className="popup__error" id="profile-about-error" />
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={handlePopupClick} title="Новое место" name="element-editor" buttonTitle="Создать">
        <input type="text" className="popup__input" name="title" id="element-title" placeholder="Название" minLength="2" maxLength="30" required />
        <p className="popup__error" id="element-title-error" />

        <input type="url" className="popup__input" name="link" id="element-link" placeholder="Ссылка на картинку" required />
        <p className="popup__error" id="element-link-error" />
      </PopupWithForm>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={handlePopupClick} title="Обновить аватар" name="avatar-editor">
        <input type="url" className="popup__input" name="avatar" id="profile-avatar" placeholder="Ссылка на картинку" required />
        <p className="popup__error" id="profile-avatar-error" />
      </PopupWithForm>

      <PopupWithForm onClose={handlePopupClick} title="Вы уверены?" name="delete-confirmation" buttonTitle="Да" />

      <ImagePopup card={selectedCard} onClose={handlePopupClick} />
    </CurrentUserProvider>
  );
}

export default App;
