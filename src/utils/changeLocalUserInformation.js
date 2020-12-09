function changeLocalUserInformation(index, value) {
  const localUsers = localStorage.getItem('users');
  const parsedUsers = JSON.parse(localUsers);
  parsedUsers[index]['login'] = value;
  localStorage.setItem('users', JSON.stringify(parsedUsers));
}

export default changeLocalUserInformation;