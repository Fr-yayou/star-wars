import React, { Component } from 'react'
import "../styles/Card.css"
import Card from "../components/Card"
import { connect } from "react-redux"
import {bindActionCreators } from "redux"
import {getSwapi,getSearch,resetSearch} from "../actions/actions"


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
    searchReset = () => {
        this.props.resetSearch()
    }

    render() {
        return (
            <div className="container-home">
                <div className="container-input">
                    <form onSubmit={this.getSearch}>
                        <input type="text" name="search" onChange={this.handleChange}  value={this.state.search}/>
                        {this.props.search.length === 0 &&  <input type="submit" value="Search"/> }
                    </form>
                    {this.props.search.length !== 0 && <button onClick={this.searchReset}>Reset</button>}
                </div>
                 {
                        this.props.datas.length === 0 ?(
                         <div style={{color:"white"}}>Bye</div>
                     ):(
                     <div className="all-cards">
                         {
                         this.props.search.length === 0 ? this.props.datas.map(data =>(
                                <Card key={data.count} data={data}/>
                            )):(
                                <h1>Hello</h1>
                            )
                         }
                     </div>
                     )
                 }
            </div>
        )
    }
}

const  mapStateToProp = state => ({
    datas:state.swapi.swapi,
    search:state.swapi.search
})
const mapDispatch = (dispatch) => bindActionCreators({
    getSwapi,
    getSearch,
    resetSearch

    
},dispatch)

export default connect(mapStateToProp,mapDispatch)(Home)
