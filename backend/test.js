// const element = <h1>Hello, world!</h1>;

// console.log(element);


const state = {
    count : 0,
    age: 39,
    name: "Shivan"
}

// console.log(state.count)
// console.log(state.age)
// console.log(state.name)
console.log(state)

const state2 = {
    ...state,
    name: "Venkat",
    age: 29
}

console.log(state2)
