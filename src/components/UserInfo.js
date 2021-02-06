export class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._userName = document.querySelector(nameSelector);
    this._userJob = document.querySelector(jobSelector);
  };

  getUserInfo() {
    const currentUserInfo = {};
    currentUserInfo.name = this._userName.textContent;
    currentUserInfo.job = this._userJob.textContent;
    return currentUserInfo;
  };

  setUserInfo(nameInput, jobInput) {
    this._userName.textContent = nameInput;
    this._userJob.textContent = jobInput;
  }
}
