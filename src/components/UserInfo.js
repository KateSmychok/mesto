export class UserInfo {
  constructor(name, job, avatar) {
    this._userName = name;
    this._userJob = job;
    this._avatar = avatar;
  }

  setUserInfo(data) {
    this._avatar.src = data.avatar;
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
  }
}
