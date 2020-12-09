function checkLocalUsers(login, password, type, nickname, email) {
  const localUsers = localStorage.getItem('users');

  if (localUsers) {
    const parsedUsers = JSON.parse(localUsers);
    
    if (type === 'login') {
      for (const user of parsedUsers) {
        if (user.login === login && user.password === password) {
          return true;
        } else {
          continue;
        }
      }
    }

    if (type === 'registration') {
      for (const user of parsedUsers) {
        if (user.nickname === nickname) {
          return 'nickname';
        } else if (user.email === email) {
          return 'email';
        } else if (user.login === login) {
          return 'login';
        } else {
          continue;
        }
      }
    }
  }
}

export default checkLocalUsers;