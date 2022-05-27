let users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  console.log(name);

  const existing = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existing) {
    return { error: "Username was taken" };
  }

  const user = { id, name, room };
  users.push(user);
  console.log(users);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id == id);
  if (index !== -1) {
    return users.splice(index, 0)[0];
  }
};

const getUser = (id) => {
  if (users.length != 0) {
    return users.find((user) => user.id === id);
  } else {
    alert("No user in the room");
  }
};

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
