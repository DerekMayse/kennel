import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
      
          <h3>Employee Name: <span className="card-petname">{this.props.employee.name}</span></h3>
          <p>Job Title: Has one</p>
          <p>{this.props.employee.phonenumber}</p>

        </div>
      </div>
    );
  }
}

export default EmployeeCard;