import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

import { Link } from 'react-router-dom'

import { ButtonBackToHome } from '../components/ButtonBackToHome'

export class Details extends Component {
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
        //console.log(this.props)
        const { id } = this.props.match.params
        this._fetchCar({ id })
    }

    render(){
        const { _id, name, maker, description_es, price_mxn } = this.state.car

        return (
            <React.Fragment>
                <div className="hero-body">
                    <ButtonBackToHome />
                    <div className="container has-text-centered">
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
                                <p>
                                    {description_es}
                                </p>
                                <p className="has-text-centered">
                                    <span className="">
                                        <NumberFormat value={price_mxn} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </span>
                                    <br />
                                    <Link to={`/thanks/${_id}`} className="button is-danger">COMPRAR</Link>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}