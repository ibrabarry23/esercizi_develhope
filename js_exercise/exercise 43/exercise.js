const user = {
  id: 1,
  name: "John",
  age: 25,
};

function userStorage  (obj){
  localStorage.setItem("user",JSON.stringify(obj))
}
userStorage(user);