import React from 'react';

export default class TaskList extends React.Component{
  render(){
    const col = this.props.todos;
    if(!col.length){
      return null;
    }
    return <ul className="list">
      { col.map((el) => <li className="item">{ el }</li>) }
    </ul>
  }
}