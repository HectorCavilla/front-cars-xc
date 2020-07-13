import React, { Component } from 'react'

export class Counter extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div>
                        Contador : <span>{this.props.counter}</span>
                    </div>

                    <button onClick={this.props.increment}>+</button>
                    <button onClick={this.props.decrement}>-</button>
                </div>
            </React.Fragment>
        )
    }
}