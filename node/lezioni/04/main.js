const express = require('express');
const app = express();
const port = 3000;
const numbers = [1,2,3,4,5,6,7,]
app.use((req,res,next)=>{
    console.log('request recived');
    console.log(req.url)
    console.log(req.method)
    next()
})

app.get('/', (req, res) => {
    res.send({ msg: 'pagina home ' });
});

app.get('/prodotti', (req,res)=>{
    console.log(req.url)
    res.send('siamo nella pagina prodotti')

})

app.get('/numbers', (req,res)=>{
    res.send(numbers)
})

app.get('/posts', async (req,res)=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const filteredData = data.filter(post=> post.id <= 10);
    res.send(filteredData)

})
app.listen(port, () => {
    console.log(`Server in esecuzione sulla porta ${port}`);
});
