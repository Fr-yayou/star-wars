import React, { Component } from 'react'
import "../styles/Card.css"
import Card from "../components/Card"
import { connect } from "react-redux"
import {bindActionCreators } from "redux"
import {toogleMessage,getSwapi} from "../actions/actions"


class Home extends Component {

    componentDidMount(){
        this.props.getSwapi()
    }
    render() {
        return (
            <div className="container-home">
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
    toogleMessage,
    getSwapi
},dispatch)

export default connect(mapStateToProp,mapDispatch)(Home)
