import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

import { ButtonBackToHome } from '../components/ButtonBackToHome'

export class Thanks extends Component {
    static propTypes = {
        match : PropTypes.shape({
            params : PropTypes.object,
            isExact : PropTypes.bool,
            path : PropTypes.string,
            url : PropTypes.string
        })
    }

    state = { car : {} }

    _fetchCar({ id }) {
        fetch(`http://localhost:3001/api/cars/${id}`)
            .then(res => res.json())
            .then(car => {
                //console.log({ car })
                this.setState({ car })
            })
    }

    _goBack() {
        window.history.back()
    }

    componentDidMount () {
        console.log(this.props)
        const { id } = this.props.match.params
        this._fetchCar({ id })
    }

    render(){
        const { name, maker, price_mxn } = this.state.car

        return (
            <React.Fragment>
                <div className="hero-body">
                    <ButtonBackToHome />
                    <div className="container has-text-centered">
                        <h1 className="title is-2">
                            ¡Gracias por tu compra!
                        </h1>
                        <h2 className="subtitle">Los detalles son:</h2>
                        <div className="columns is-vcentered">
                            <div className="column is-5">
                                <figure className="image is-4by3">
                                    <img src="https://picsum.photos/id/1071/800/600" alt="Description" />
                                </figure>
                            </div>
                            <div className="column is-6 is-offset-1">
                                <h1 className="title is-2">
                                    { name }
                                </h1>
                                <h2 className="subtitle is-4">
                                    { maker }
                                </h2>
                                <br />
                                <p className="has-text-centered">

                                    <span className="tag is-info is-large">
                                        Total:
                                        <NumberFormat value={price_mxn} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}