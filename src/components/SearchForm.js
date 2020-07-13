import React, { Component } from 'react';

export class SearchForm extends Component {
    /*state = {
        inputCar : ''
    }

    _handleChange = (e) => {
        this.setState({ inputCar : e.target.value })
    }*/

    _handleSubmit = (e) => {
        e.preventDefault()
        
        /*const { inputCar } = this.state*/
        
        fetch(`http://localhost:3001/api/cars`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults = "0" } = results
                console.log({ Search, totalResults })
                this.props.onResults(Search)
            })
    }

    render(){
        return (
            <React.Fragment>
                <form onSubmit={this._handleSubmit}>
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                onChange={this._handleChange}
                                type="text"
                                placeholder="Buscar carro..." />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                                Buscar
                            </button>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}