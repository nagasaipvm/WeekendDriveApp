import React from 'react';
export default class WelcomeUser extends React.Component {
   render() {
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
        "position": "fixed",
        "width":"100%",
        "border": "3px solid #fff",
        "boxSizing":"border-box", /* causes item size to include border and padding */
        "mozBoxSizing":"border-box"

     };
      return (
        <table width="100%" cols ="4"> 
        <tr>
        <td width="50%" ><h2>Welcome XXXXXX </h2></td>
        <td width="10%"></td>
        <td width="10%"></td>
        <td width="30%"> <input type="submit" style = {buttonStyle} value ="Sign Out"/> </td>
        </tr>
        <tr>
        <td width="100%">
        <hr></hr> </td>
        </tr>
        </table>
        
      );
   }
}