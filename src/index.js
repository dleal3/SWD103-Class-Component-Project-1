import React, { Component } from 'react';
import { render } from 'react-DOM';

class TodoList extends Component {
  render(){
    return(
      <span>
        <ul>
          <li>{this.props.td1}</li>
          <li>{this.props.td2}</li>
          <li>{this.props.td3}</li>
        </ul>
      </span>
    )
  }
}

render(
  <TodoList td1="Sign up for code review" td2="Finish To do list component" td3="Get mad sleep"/>,
  document.getElementById('root')
)
