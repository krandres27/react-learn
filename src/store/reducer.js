// initial state
const initialState = {
    persons: []
}

// reducer
const reducer = (state = initialState, action) => {

    if(action.type === 'ADD_PERSON') {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: action.personData.name,
            age: Math.floor( action.personData.age )
        }

        return {
            ...state,
            persons: state.persons.concat(newPerson)
        }
    }
    
    if(action.type === 'DELETE_PERSON') {
        const updatedPersonsArray = action.persons.filter( person => person.id !== action.personId);

        return {
            ...state,
            persons: updatedPersonsArray
        }
    }

    return state;
}

export default reducer;