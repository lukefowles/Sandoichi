export default (sandwiches = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; 
        case 'CREATE':
            return sandwiches; 
        default:
            return sandwiches;
    }
}

// state =[] -> In reducers the state always needs to be equal to something. The posts are going to be an array so we are going to equal the state to an empty array.
// a reducer is a function or more specifically it is equal to a function that accepts the state and also it accepts the action. Then based on the action type, if it is equal to CREATE we want to return something like either the action or the state changed by the action. Usually will have a lot of if statements for loads of different things so better to use a SWITCH statement instead. 

    // Once action is dispatched we need to immediately fetch our action.payload which is our data.
    // This is redux data passing. To actually retrieve the data from within our components.
    // We have to fetch our data from the global redux store. And we can do that with the help of useSelectors.
    // Go to Components/Sandwiches/Sandwiches.js and import useSelector
