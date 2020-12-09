function addNewUserToLocalStorage(nickname, email, login, password, id) {
  const newUser = {
    id: id,
    login: login,
    nickname : nickname,
    email: email,
    password: password,
  }

  const localUsers = localStorage.getItem('users');

  if (localUsers) {
    const parsedUsers = JSON.parse(localUsers);
    parsedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(parsedUsers));
  } else {
    const users = [newUser];
    localStorage.setItem('users', JSON.stringify(users));
  }
}

export default addNewUserToLocalStorage;