import React from 'react';

export default class Checkbox extends React.Component {
   render() {
      return (
        <input type="checkbox" id={this.props.name} value={this.props.val}></input>
      );
   }
}