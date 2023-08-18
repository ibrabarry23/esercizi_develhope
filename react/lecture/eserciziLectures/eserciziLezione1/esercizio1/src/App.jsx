import User from "./Component/User";

function App () {

  const user = {
    name: 'ubuntu',
    age: 100,
    email:  'ubuntu@linux.org'
  }

  return (
    <User name={user.name} age={user.age} email={user.email}/>
  )

}

export default  App