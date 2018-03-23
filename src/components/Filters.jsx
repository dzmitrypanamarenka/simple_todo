import React from 'react';
import { Link } from 'react-router-dom'

const filters = ['all', 'active', 'done'];

export default () =>
  <div className="filters">
    { filters.map((el, i) => <Link to={el === 'all' ? '/' : el}
        key={ i }
        className="link"
        style={{ color: 'black', marginRight: '15px' }}>
        { el }
        </Link>
    ) }
</div>