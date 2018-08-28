import React from 'react';

export default class Textbox extends React.Component {
   render() {
    var textboxStyle = {
        "width": "100%",
        "height": "50%",
        "padding": "5px 5px",
        "margin": "8px 0",
        "display": "inline-block",
        "border": "1px solid #ccc",
        "border-radius": "4px",
        "box-sizing": "border-box"
       }
      return (
        <input type="text" style ={textboxStyle} id={this.props.id} onChange ={this.props.onChange}></input>
        
      );
   }
}