import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

import { Link } from 'react-router-dom'

export class Car extends Component {
    static propTypes = {
        id : PropTypes.string,
        name : PropTypes.string,
        maker : PropTypes.string,
        car_type : PropTypes.string,
        price_mxn : PropTypes.number,
        price_usd : PropTypes.number,
        description_es : PropTypes.string,
        description_en : PropTypes.string
    }

    render() {
        const { id, name, maker, car_type, price_mxn, price_usd, description_es, description_en } = this.props

        return (
            <React.Fragment>
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            {name} | {maker} | {car_type}
                        </p>
                    </header>
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://picsum.photos/id/1071/400" alt="{name}" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <p>{description_es}</p>
                            <span class="tag is-info is-large">
                                <NumberFormat value={price_mxn} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </span>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <Link to={`/detail/${id}`} className="card-footer-item">Detalles</Link>
                        <Link to={`/buy/${id}`} className="card-footer-item">Comprar</Link>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}