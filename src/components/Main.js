import React from 'react';

import api from '../utils/api';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'Неизвестный',
      userDescription: 'Потеряно соединение с сервером',
      userAvatar: '#',
    };
  }

  componentDidMount() {
    api.getUserInfo()
      .then(res =>
        this.setState({
          userName: res.name,
          userDescription: res.about,
          userAvatar: res.avatar,
        })
      );
  }

  render() {
    return (
      <main className="content">

        <section className="profile">
          <button onClick={this.props.onEditAvatar} type="button" className="profile__avatar-container">
            <img alt="Аватар" className="profile__avatar" src={this.state.userAvatar} />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{this.state.userName}</h1>
            <p className="profile__description">{this.state.userDescription}</p>
            <button onClick={this.props.onEditProfile} type="button" className="profile__edit-button" />
          </div>
          <button onClick={this.props.onAddPlace} type="button" className="profile__add-button" />
        </section>

        <section className="elements">
          <ul className="elements__list" />
        </section>

      </main>
    );
  }
}

export default Main;