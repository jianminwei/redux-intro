
export  function counter(state = {counter: 5}, action) {

    //action handler can only derive a new state based on payload.
    //It can't mutate the existing previous state.
    if (action.type === 'INCREASE_COUNTER') { 
        return { counter: state.counter + action.payload.counter_increment_unit };
    }

    return state
}