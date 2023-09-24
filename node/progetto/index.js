import { json } from "express"

const searchPokemon = document.getElementsById("searchPokemon")
const searchButton = document.getElementsById("searchButton")

searchButton.addEventlistner("click", async ()=>{
    const data =searchPokemon.values
    const obj = {data}
    
    const response = await fetch("url",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:json.stringfy(obj)
    })
    const sendData = await  response.json()
    console.log(pokemon)
})

