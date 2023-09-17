const express = require('express')
const app = express();
const axios = require('axios')
const port = 3000;
const users = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
    },
    {
      id: 3,
      name: 'Sam Jackson',
      age: 35,
    },
    {
      id: 4,
      name: 'Emily Brown',
      age: 28,
    },
    {
      id: 5,
      name: 'Michael Johnson',
      age: 40,
    }
  ];
  app.get('/', (req,res)=>{
    res.send(users)
  })
  app.get('/over30', (req,res)=>{
    const over30 = users.filter((item)=> item.age>=30)
    res.send(over30);
  })

  app.get('/todos', async(req,res)=>{
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(response.data)
        res.send(response.data)
    } catch (error) {
        console.log(error)
    }
   
  })
app.listen(port, ()=>{
    console.log('server listening',port)
})
