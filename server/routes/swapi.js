const express = require("express")
const router = express.Router()
const fetch = require('node-fetch');


router.get("/",async(req,res) =>{
    
    let input = "Naboo Royal Starship"
    let apiPeople = fetch(`http://swapi.dev/api/people/?search=${input}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let apiPlanets = fetch(`http://swapi.dev/api/planets/?search=${input}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let apiFilms = fetch(`http://swapi.dev/api/film/?search=${input}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let apiFourSpecies = fetch(`http://swapi.dev/api/species/?search=${input}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let apiVehicles = fetch(`http://swapi.dev/api/vehicles/?search=${input}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let apiStartships = fetch(`http://swapi.dev/api/starships/?search=${input}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    Promise.all([apiPeople,apiPlanets,apiFilms,apiFourSpecies,apiVehicles,apiStartships])
    .then(datas => {
        datas.forEach(data =>{
            process(data.json())
        })
    })
    .catch(err =>{
        console.log(err)   
    })

    let process = (prom) =>{
        prom.then(data =>{
            console.log(data)
        })
        .catch(err =>{
            console.log(err)
        })
    }


})


module.exports = router