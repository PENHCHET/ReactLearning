console.log("Welcome with Redux on plain Javascript")

//TODO: REDUCER takes the two parameters are currentState and action
// REDUCER IS A PURE FUNCTION
function counter(currentState, action){
    var nextState = {
        count: currentState.count
    }
    switch (action.type) {
        case 'ADD':
            console.log("ADD FROM THE COUNTER REDUCER", action);
            nextState.count = currentState.count + 1;
            return nextState;
            break;
        case 'MINUS':
            console.log("REMOVE FROM THE COUNTER REDUCER", action);
            nextState.count = currentState.count - 1;
            return nextState
            break;
        case 'RESET':
            console.log("RESET THE COUNTER REDUCER", action);
            nextState.count = 0
            return nextState;
            break;
        default:
            return currentState;
    }
}

//TODO: STATE
var state = { count: 0 };

//TODO: STORE
var store = Redux.createStore(counter, state);

var countElement = document.getElementById("counter");

console.log(store);

//TODO: RENDER FUNCTION
function render(){
    //TODO: RENDER FUNCTION IN THE SUBSCRIBE FUNCTION
    console.log("IN RENDER SUBSCRIBE");
    console.log(store.getState());
    var state = store.getState();
    countElement.innerHTML = state.count;
}

render();

//TODO: SUBSCRIBE WHEN THE ACTION GO TO THE REDUCER THE SUBSCRIBE HAS BEEN HAPPEN
store.subscribe(render);

//TODO: ACTION
// {type: "ADD"}
document.getElementById("add")
    .addEventListener("click", function(){
        console.log("Add Button");
        store.dispatch({
            type: "ADD"
        });
    });

document.getElementById("minus")
    .addEventListener("click", function(){
        console.log("Minus Button");
        store.dispatch({
            type: "MINUS"
        });
    });

document.getElementById("reset")
    .addEventListener("click", function(){
        console.log("Reset Button")
        store.dispatch({
            type: "RESET"
        });
    })