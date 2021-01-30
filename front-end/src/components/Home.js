import React, { Component } from 'react'
import styleCard from "../styles/Card.module.css"
import Card from "../components/Card"
import { connect } from "react-redux"
import {bindActionCreators } from "redux"
import {getSwapi,getSearch,resetSearch} from "../actions/actions"
import search from "../assets/search.png"
import ResultSearch from "./ResultSearch"


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
        if(this.state.search === ""){
            return null
        }
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
            <div className={styleCard.containerHome}>
                <div className={styleCard.containerForm}>
                    <form className={styleCard.form} onSubmit={this.getSearch}>
                        <div>
                            <img className={styleCard.searchLogo} src={search} alt="search"/>
                            <input className={styleCard.inputSearch} type="text" name="search" onChange={this.handleChange}  value={this.state.search}/>
                        </div>
                        {this.props.search.length === 0 &&  <input className={styleCard.btnSearch}  type="submit" value="Search"/> }
                    </form>
                    {this.props.search.length !== 0 && <button className={styleCard.btnReset} onClick={this.searchReset}>Reset</button>}
                </div>
                 {
                        this.props.datas.length === 0 ?(
                         <div style={{color:"white"}}>Bye</div>
                     ):(
                     <div className={styleCard.allCards}>
                         {
                         this.props.search.length === 0 ? this.props.datas.map(data =>(
                                <Card key={data.count} data={data}/>
                            )):(
                                <ResultSearch data={this.props.search}/>
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
