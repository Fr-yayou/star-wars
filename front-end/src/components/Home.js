import React, { Component } from 'react'
import "../styles/Card.css"
import axios from "axios"
import Card from "../components/Card"


class Home extends Component {
    constructor(){
        super()
        this.state = {
            datas:[]
        }
        
    }

    componentDidMount(){
        axios.get("http://localhost:5000/swapi")
        .then(res =>{
            this.setState({datas:res.data.data})
        })
    }
    render() {
        return (
            <div className="container-home">
                 {
                     this.state.datas.length === 0 ?(
                         <div style={{color:"white"}}>Bye</div>
                     ):(
                     <div className="all-cards">
                         {
                            this.state.datas.map(data =>(
                                <Card key={data.count} data={data}/>
                            ))
                         }
                     </div>
                     )
                 }
            </div>
        )
    }
}

export default Home
