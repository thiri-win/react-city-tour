import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import './TourList.scss'
import { tourData } from '../../tourData'

export default class TourList extends Component {

    state = {
        tours: tourData
    }

    removeTour = id => () => {
        this.setState({
            tours: this.state.tours.filter( tour => tour.id !== id)
        })
    }

    render() {
        return (
            <section className="tourlist">
                {this.state.tours.map( tour => 
                <Tour 
                key={tour.id} 
                tour={tour} 
                remove = {this.remove} 
                removeTour = {this.removeTour}
                /> )}
            </section>
        )
    }
}
