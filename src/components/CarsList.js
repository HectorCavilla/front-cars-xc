import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Car } from './Car'

export class CarsList extends Component {
    static propTypes = {
        cars: PropTypes.array
    }

    render() {
        const cars = this.props
        console.log(cars.cars)
        return (
            <div className='CarsList'>
                {
                    cars.cars.map(car => {
                        return (
                            <div key={car._id} className="CarsList-item">
                                <Car
                                    id={car._id}
                                    name={car.name}
                                    maker={car.maker}
                                    car_type={car.car_type}
                                    price_mxn={car.price_mxn}
                                    price_usd={car.price_usd}
                                    description_es={car.description_es}
                                    description_en={car.description_en}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
        
    }
}