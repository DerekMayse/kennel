import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    
    state = {
        locations: [],
    }

componentDidMount(){
    
    
    LocationManager.getAll()
    .then((locations) => {
        this.setState({
            locations: locations
        })
    })
}

render(){
  
  
    return(
      <div className="container-cards">
        {this.state.locations.map(location =>
          <LocationCard key={location.id} location={location} />
        )}
      </div>
    )
  }
}

export default LocationList