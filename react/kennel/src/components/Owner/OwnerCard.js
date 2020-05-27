import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
         
          <h3>Name: <span className="card-petname">Has One</span></h3>
        </div>
      </div>
    );
  }
}

export default OwnerCard;