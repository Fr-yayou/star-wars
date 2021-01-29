import React, { Component } from 'react'
import "../styles/Card.css"
import Card from "../components/Card"
import { connect } from "react-redux"
import {bindActionCreators } from "redux"
import {getSwapi,getSearch} from "../actions/actions"


class Home extends Component {

    constructor(){
        super()

        this.state = {
            search:""
        }
    }

    componentDidMount(){
        this.props.getSwapi()
    }
    
    handleChange  = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    getSearch = (e) =>{
        e.preventDefault()
        let searchString ={
            string: this.state.search
        }
        this.props.getSearch(searchString)
        this.setState({search:""})

    }

    render() {
        return (
            <div className="container-home">
                <div className="container-input">
                    <form onSubmit={this.getSearch}>
                        <input type="text" name="search" onChange={this.handleChange}  value={this.state.search} />
                        <input type="submit" value="Search"/>
                    </form>
                </div>
                 {
                        this.props.datas.length === 0 ?(
                         <div style={{color:"white"}}>Bye</div>
                     ):(
                     <div className="all-cards">
                         {
                         this.props.datas.map(data =>(
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

const  mapStateToProp = state => ({
    datas:state.swapi.swapi
})
const mapDispatch = (dispatch) => bindActionCreators({
    getSwapi,
    getSearch
},dispatch)

export default connect(mapStateToProp,mapDispatch)(Home)
