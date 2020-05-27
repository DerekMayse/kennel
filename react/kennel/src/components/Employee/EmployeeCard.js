import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
      
          <h3>Employee Name: <span className="card-petname">JSON Doe</span></h3>
          <p>Job Title: Has one</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;