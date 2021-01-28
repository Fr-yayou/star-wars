import React from 'react'
import { connect } from "react-redux"
import {bindActionCreators } from "redux"
import {toogleMessage} from "../actions"

const  Toggle = ({messageVisibility,toogleMessage}) =>  { 
        return (
            <div>
                {messageVisibility &&
                    <p>You will be seeing this if redux  actions is toogled</p>
                }
                <button onClick={toogleMessage}>Toogle Me</button> 
            </div>
        ) 
}
 
const  mapStateToProp = state => ({
    messageVisibility:state.message.messageVisibility
})
const mapDispatch = (dispatch) => bindActionCreators({
    toogleMessage
},dispatch)

export default connect(mapStateToProp,mapDispatch)(Toggle)

 