const red =  (state,action) => {
    switch(action.type) {
        case 'REMOVE_EVENT':
            return{
                eventData:state.eventData.filter(event=>{
                    return event.id !== action.payload
                })
            }
        case 'ADD_EVENT':
            return{
                eventData:[action.payload, ...state.eventData]
            }
        case 'EDIT_EVENT':
            const updatedEvents = action.payload

            const updatedEventData = state.eventData.map(item => {
             if(item.id === updatedEvents.id){
                 return updatedEvents
             }
             return item
            })
            return{
                eventData:updatedEventData

            }
        default:
            return state
    }
}

export default red