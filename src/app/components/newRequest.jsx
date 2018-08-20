import React from 'react';
import ReactDOM from 'react-dom';

export default class NewRequest extends React.Component {
    render(){
        var buttonStyle = {
            "height": "25px",
            "paddingLeft": "12px",
            "paddingRight": "12px", 
            "paddingTop":"3px",
            "paddingBottom":"3px",
      
            "fontFamily": "Verdana",
            "fontSize":"12px",
            "borderRadius":"4px",
            "backgroundColor":"#E6E6E6",
            "border": "1px solid #F5FFFA",
            "WebkitBoxShadow": "inset 0 1px 2px rgba(0,0,0,0.3)",
            "MozBoxShadow": "inset 0 1px 2px rgba(0,0,0,0.3)",
            "boxShadow": "inset 0 1px 2px rgba(0,0,0,0.3)"
         };
         var tableStyle = {
          "overflow-y":"scroll",
          "height":"100%",
          "display": "block",
          "padding-top": "0px",
      
         };
      return (
        <table width="100%" style={tableStyle}> 
           <tr> <h1> {this.props.text}</h1> </tr>
           <tr> <button style ={buttonStyle} onClick={this.props.closePopup}>close me</button> </tr>
           </table>
        
      );
   }
}