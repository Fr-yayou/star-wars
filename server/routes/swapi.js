const express = require("express")
const router = express.Router()
const fetch = require('node-fetch');


router.post("/post",async(req,res) =>{
    const {string} = req.body
    let apiPeople = fetch(`http://swapi.dev/api/people/?search=${string}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    let apiPlanets = fetch(`http://swapi.dev/api/planets/?search=${string}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    let apiFilms = fetch(`http://swapi.dev/api/films/?search=${string}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    let apiFourSpecies = fetch(`http://swapi.dev/api/species/?search=${string}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    let apiVehicles = fetch(`http://swapi.dev/api/vehicles/?search=${string}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    let apiStartships = fetch(`http://swapi.dev/api/starships/?search=${string}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })

    let array = []

    Promise.all([apiPeople ,apiPlanets ,apiFilms ,apiFourSpecies ,apiVehicles ,apiStartships])
    .then( datas => Promise.all(datas.map(r => r.json())))
    .then(data => data.forEach(element => {
      if(element.count > 0){
          array.push(element.results)
      }else{

      }
  }))
  .then(() => {
      if(array.length > 0){
          res.status(200).json({message:"success", data:array})
      }else{
          res.status(400).json({message:`${string} not found`})
      }
  })


})

router.get("/", async (req,res) =>{
    try{
        const urlArray = []
        //Fetch all the url//
        const responseUrl = await fetch("https://swapi.dev/api/")
        const resultUrl = await responseUrl.json()
        for(const [key,value] of Object.entries(resultUrl)){
            urlArray.push(value)
        }


        Promise.all(urlArray.map( async url => {
            const response = await fetch(url)
            const result = await response.json()
            return result
        })).then(datas =>{
            if(datas.length < 0){
                res.status(400).json({message:"Ressources not found"})
            }
            res.status(200).json({message:"Success",data:datas})
        })

    }catch(err){
        res.status(400).json({mesage:err})
    }
})


module.exports = router