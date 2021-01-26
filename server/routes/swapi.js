const express = require("express")
const router = express.Router()
const fetch = require('node-fetch');


router.get("/",async(req,res) =>{
    
    let input = "Luke"
    let apiPeople = fetch(`http://swapi.dev/api/people/?search=${input}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    let apiPlanets = fetch(`http://swapi.dev/api/planets/?search=${input}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    ////RETURN HTML ///
    let apiFilms = fetch(`http://swapi.dev/api/film/?search=${input}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    let apiFourSpecies = fetch(`http://swapi.dev/api/species/?search=${input}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    let apiVehicles = fetch(`http://swapi.dev/api/vehicles/?search=${input}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    let apiStartships = fetch(`http://swapi.dev/api/starships/?search=${input}`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    
  Promise.all([apiPeople,apiPlanets,apiFilms,apiFourSpecies,apiVehicles,apiStartships])
  .then(datas => {
      datas.forEach(data =>{
          if(data.headers.get('content-type') == "application/json"){
              let result = data.json()
              process(result)
          }else{
              return []
          }
      })
    })
.catch(err =>{
    console.log(err)   
})

let process = (prom) => {
    prom.then(data =>{
        console.log(data.results)
    })
}



})




////TEST//

// apiPeople
// .then(res => res.json())
// .then(res => console.log(res.results))

////TEST//
// router.get("/",async(req,res) =>{
//     const url = []
//    res = await fetch("https://swapi.dev/api/")
//    result = await res.json()
//    for(n in result){
//        console.log(n)
//    }
// })


module.exports = router