/*
livb
*/
const exspress = require('express');
const app = exspress();
const port = 3000;

app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    // res.setHeader('Content-Type','text/plain')
    res.send('siamo nella home page del server')
    
}) 

app.get('/prodotti', (req,res)=>{
    console.log(req.url)
    res.send('siamo nella pagina prodotti')

})

app.listen(port, ()=>{
    console.log(`Server runing on port ${port}`);
})