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
    let apiFilms = fetch(`http://swapi.dev/api/films/?search=${input}`,{
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
    let count = 0
    let array = []

  Promise.all([apiPeople,apiPlanets,apiFilms,apiFourSpecies,apiVehicles,apiStartships])
  .then( datas => Promise.all(datas.map(r => r.json())))
  .then(data => data.forEach(element => {
      if(element.count > 0){
          array.push(element.results)
      }else{

      }
  }))
  .then(() => {
      if(array.length > 0){
          res.status(200).json({message:"success", data:array[0]})
      }else{
          res.status(400).json({message:`${input} not found`})
      }
  })



//   .then(response => response.map(async r =>{
//     const result = await r
//     if(result.results.length > 0){
//         return res.status(200).json({message:"hello"})
//     }
//   }))
    
    // {
      
    // datas.forEach( async data =>{
    //           let result = await data.json()
    //           if(result.results.length > 0){
    //               process(result.results)
    //           }else{
    
    //           }
    //         //   process(result)
    //   })
    //   console.log(count)
    //   console.log(array)
    // })
    // .catch(err =>{
    // return res.status(400).json({message:err}) 
    // })




// let process = (prom) => {
//     prom.then(data =>{
//         if(data.results.length > 0){
//         //     console.log("HELLO")
//         //    return res.status(200).json({message:"success",data:data.results})
//             console.log(data.results)
//         }
//         // console.log("BYE")
//         // return res.status(400).json({message:`${input} not found`})
//     }).catch(err =>{
//         return res.status(400).json({message:err})
//     })
// }



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