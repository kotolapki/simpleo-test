function deleteLocalUser(index) {
  const localUsers = localStorage.getItem('users');
  const parsedUsers = JSON.parse(localUsers);
  parsedUsers.splice(index, 1);
  localStorage.setItem('users', JSON.stringify(parsedUsers));
}

export default deleteLocalUser;