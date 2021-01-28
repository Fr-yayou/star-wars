const initalState = {
    messageVisibility: false

};

const toggleReducer = (state = initalState, action) => {
    const { type } = action

    switch(type) {
        case 'TOGGLE_MESSAGE':
            return {
                ...state,
                messageVisibility:!state.messageVisibility
            }
        default:
            return state
            
    }
}

export default toggleReducer