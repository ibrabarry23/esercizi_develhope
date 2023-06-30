const user = {
  id: 1,
  name: "John",
  age: 25,
};

async function printUserDataLocal() {
  const data = localStorage.getItem("user");
  if (data) {
    try {
      const userData = JSON.parse(data);
      console.log(userData);
    } catch (error) {
      console.log("Error encountered while parsing data:", error);
    }
  } 
}

printUserDataLocal();