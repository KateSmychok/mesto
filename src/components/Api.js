export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      })
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      })
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  setUserInfo(name, job) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: job
      })
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      })
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  setAvatar(avatarLink) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      })
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  postNewCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      })
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  likeCard(cardId, isLiked) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      })
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      })
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
