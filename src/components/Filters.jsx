import React from 'react';
import { Link } from 'react-router-dom'

const filters = ['all', 'active', 'done'];

export default class extends React.Component{
  applyFilter = current => e => {
    e.preventDefault();
    this.props.applyFilter(current);
  };
  render(){
    return <div className="filters">
      { filters.map((el, i) => {
        return <Link to={`/${el}`}
                  key={ i }
                  className="link" style={{ color: 'black', marginRight: '15px' }}>
                  { el }</Link>
      }) }
    </div>
  }
}
//onClick={ this.applyFilter(el) }