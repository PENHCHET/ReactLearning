console.log("Welcome with Redux on plain Javascript")
// createStore
// getState
// dispatch
// subscribe

//TODO: REDUCER takes the two parameters are currentState and action
// REDUCER IS A PURE FUNCTION
// COUNTER REDUCER
function counterReducer(currentState, action) {

    if(typeof currentState === "undefined") {
        return {
            count: 0
        };
    }

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

function todosReducer(currentState, action) {
    if (typeof currentState === "undefined") {
        return {
            todos: []
        }
    }

    var nextState = Object.assign({}, currentState)

    switch (action.type) {
        case "NEW": 
            console.log("NEW TODO IN REDUCER");
            nextState.todos.push(action.payload)
            return nextState;
            break;
        case "DELETE":
            console.log("DELETE TODO IN REDUCER");
            nextState.todos.pop()
            return nextState;
            break;
        default:
            return currentState;
    }
}

//TODO: STATE
var state = { count: 0 };

//TODO: STORE
var store = Redux.createStore(Redux.combineReducers({counterReducer: counterReducer, todosReducer: todosReducer}));

var countElement = document.getElementById("counter");
var todoInput = document.getElementById("todo");
var todosList = document.getElementById("todoList")


console.log(store);

//TODO: RENDER FUNCTION
function render() {
    //TODO: RENDER FUNCTION IN THE SUBSCRIBE FUNCTION
    console.log("IN RENDER SUBSCRIBE");
    console.log(store.getState());
    var state = store.getState();
    countElement.innerHTML = state.counterReducer.count.toString();
    renderList(state);
}

function renderList(state) {
    console.log(state);
    todosList.innerHTML = '';
    for (var i = 0; i < state.todosReducer.todos.length; i++) {
        var li = document.createElement("li");
        var todo = state.todosReducer.todos[i];
        console.log(todo)
        li.innerHTML = todo.task.toString();
        todosList.appendChild(li);
    }
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
    });


//TODO: ACTION FOR TODOS
document.getElementById("addTodo")
    .addEventListener("click", function(){
        console.log("ADD TODO ", todoInput.value);
        store.dispatch({
            type: "NEW",
            payload: {
                task: todoInput.value
            }
        });
    });

document.getElementById("deleteTodo")
    .addEventListener("click", function(){
        console.log("DELETE TODO");
        store.dispatch({
            type: "DELETE"
        })
    });