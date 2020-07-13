import React, { Component } from 'react'

//import { SearchForm } from '../components/SearchForm'
import { CarsList } from '../components/CarsList'

export class Home extends Component {
    state = { usedSearch : true, results : [] }

    _fetchCars() {
        fetch(`http://localhost:3001/api/cars`)
            .then(res => res.json())
            .then(cars => {
                this.setState({ results: cars })
                //console.log(this.state.results)
            })
    }

    componentDidMount () {
        this._fetchCars()
    }

    render (){

        return(
            <React.Fragment>
                { this.state.results.length === 0 ? <p>Sin resultados</p> : <CarsList cars={ this.state.results } /> }
            </React.Fragment>
        )
    }
}