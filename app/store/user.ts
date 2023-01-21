import {action, makeObservable, observable} from 'mobx';

class User {
  userToken: string = '';

  constructor() {
    makeObservable(this, {
      userToken: observable,
      setToken: action,
    });
  }

  setToken(token: string) {
    this.userToken = token;
  }

  get token() {
    return this.userToken;
  }
}

export const user = new User();
