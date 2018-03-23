import React from 'react';

export default class TaskList extends React.Component{
  removeTask = id => e => {
    e.preventDefault();
    this.props.removeTask(id);
  };
  changeStatus = id => e => {
    this.props.changeStatus(id);
  };
  render(){
    const col = this.props.todos;
    if(!col.length){
      return null;
    }
    const filter = this.props.filter;
    const filteredCol = filter === 'all' ? col : col.filter((el) => el.status === filter);
    return <ul className="list">
      { filteredCol.map((el) => {
        const statusStyle = {
          cursor: 'pointer',
          textDecoration: el.status === 'active' ? 'none' : 'line-through'
        };
        return <li key={ el.id } className="item">
        <span className="text"
              onClick={ this.changeStatus(el.id) }
              style={statusStyle}>{ el.text }</span>
        <a href="#" onClick={this.removeTask(el.id)} style={{marginLeft: '20px'}}>x</a>
        </li>
      }) }
    </ul>
  }
}