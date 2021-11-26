import React from "react";


class CounterComponent extends React.Component {

    state = {
        count: 0,
        name: "Shivan LP",
        age: 39
    }
    constructor(props) {
        super(props)
        // this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)
    }

    increment = () => {
        console.log("Increment method")
        this.setState({
            ...this.state,
            count: this.state.count + 1,
            age: this.state.age + 1
        })
    }

    decrement = () => {
        console.log("Decrement method")
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
            <h3>Counter demo with html/javascript</h3>
            <p>Count Value : 
                <span id="countSpan">{this.state.count}</span>
            </p>
            <p>Count Value : 
                <span id="countSpan222">{this.state.count}</span>
            </p>
            <p>Count Value : 
                <span id="countSpan333">{this.state.count}</span>
            </p>
            <p>Age is : {this.state.age} </p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>
        )

    }
}


export default CounterComponent;
