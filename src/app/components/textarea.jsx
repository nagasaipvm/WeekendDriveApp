import React from 'react';

export default class TextArea extends React.Component {
   render() {
    var textareaStyle = {
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
        <textarea rows="8" cols="100" id ="{this.props.id}" name ="{this.props.name}" style={textareaStyle} onChange ={this.props.onChange}> </textarea>
        
      );
   }
}