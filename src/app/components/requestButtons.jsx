import React from 'react';
import ReactDOM from 'react-dom';
import NewRequest from './newRequest.jsx';
import Textbox from'./textbox.jsx';
import ChCheckbox from './checkbox.jsx';
import Checkbox from './checkbox.jsx';

export default class RequestButtonsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
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
        "box-sizing":"border-box", /* causes item size to include border and padding */
        "-moz-box-sizing":"border-box"

     };
      return (
        <table width="100%" cols ="4"> 
        <tr>
        <td width="50%"></td>
        <td width="20%"> </td>
        <td width="15%"> <input type="submit" style ={buttonStyle} value ="Copy Request"/> </td>
        <td width="15%"> <input type="submit" style ={buttonStyle} value ="New Request"  onClick={this.togglePopup.bind(this)}/> </td>
        </tr>
        {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </table>
        
      );
   }
}
class Popup extends React.Component {
  render() {
    var popupstyle = {
      "position": "fixed",
  "width": "75%",
  "height": "90%",
  "top": "30",
  "left": "0",
  "right": "0",
  "bottom": "0",
  "margin": "auto",
  "background-color": "rgb(0,0,0)",
  "background-color": "rgba(0,0,0,0.4)",
  "z-index": "1",
  "padding-top": "0px",
  "border-style": "solid",
  "border": "1px solid",
  "background": "white",
  "border-radius": "25px"
    }
    var innerPopupstyle = {
      "position": "absolute",
  "left": "0",
  "right": "0",
  "bottom": "0",
  "margin": "auto",
  "background": "white",
  "width": "90%",
  "height": "90%",
  "padding": "20px"
    }
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

   }
    return (
      <div style={popupstyle}>
          <table align="top" width="100%">
          <tr><center> <h3>New Request Form</h3> </center> </tr>
          </table>
          <hr></hr>
          <PopupDetails text={this.props.text} closePopup ={this.props.closePopup}></PopupDetails>
        </div>
    );
  }
}
class PopupDetails extends React.Component {
  render() {
    var buttonStyle = {
      "height": "25px",
      "width": "100px",
      "paddingLeft": "0px",
      "paddingRight": "0px", 
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
    "height":"465px",
    "display": "block",
    "padding-top": "0px",
    "font-family": "Times New Roman",
    "font-size": "15px"

   }

   var levelSplituptableStyle = {
    "border": "0px solid",
    "backgroundColor":"#E8E8E8"
   }

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
      
          <table width="100%" style={tableStyle} cols="4"> 
           <tr>
              <td width="5%"> </td>
              <td width="45%">Number of positions </td>
              <td width="25%"> <Textbox id="nop"> </Textbox> </td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">Skill Set </td>
              <td width="25%"> <Textbox id="skillSet"> </Textbox> </td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">Location </td>
              <td width="25%"> <Textbox id="location"> </Textbox> </td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">Levels of Interview </td>
              <td width="25%"> <Checkbox name="loi" value="L1"/> L1 <Checkbox name="loi" value="L2"/> L2 <Checkbox name="loi" value="PM"/> PM</td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">End Client </td>
              <td width="25%"> <Textbox id="client"/></td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">Project (For Billing the interview process) </td>
              <td width="25%"> <Textbox id="project"/></td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td colSpan="2">Level Split up </td>
              <td width="25%"></td>
           </tr>
           <tr rowspan="5">
              <td width="5%"> </td>
              <td colSpan="3" id="levelSplitUp" style={levelSplituptableStyle}>
                 <LevelSplitup></LevelSplitup>
              </td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td colSpan="2">Level Split up </td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">Required Skills </td>
              <td width="25%"> <Textbox id="RSkills"/></td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">Good to Have Skills </td>
              <td width="25%"> <Textbox id="GTHSkills"/></td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">Addtional Details </td>
              <td width="25%"> </td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td colSpan="2">  <textarea rows="8" cols="100" style={textareaStyle}> </textarea></td>
              <td width="25%"></td>
           </tr>
           <tr>
           <td width="10%"> </td>
           <td colSpan="2" border="0px solid">
           <table width="100%" >
                  <tr>
                    <td> <button style ={buttonStyle}>SAVE</button> </td>
                    <td> <button style ={buttonStyle}>SUBMIT</button> </td>
                    <td> <button style ={buttonStyle} onClick={this.props.closePopup}>CANCEL</button></td>
                  </tr>
                 </table>
           </td>
           <td width="25%"></td>
           </tr>
           </table>

    );
  }
}
class LevelSplitup extends React.Component {
  constructor () 
  {
    super();
    this.state = {
    rows: [ { Level : "",NumberofPositions : "", SalaryBracket :""}]
  };
}
  handleAddRow () {
    const item = {Level : "",NumberofPositions : "", SalaryBracket :""};
    var rows1 = this.state.rows;
    rows1.push(item);
    this.setState({
      rows: rows1
    });
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              <table width ="100%" id="tab_logic">
                <thead>
                  <tr>
                    <th> Level </th>
                    <th> Number of positions </th>
                    <th> Salary Bracket </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item) => (
                    <tr id="addr0">
                      <td><Textbox/></td>
                      <td>
                        <Textbox/>
                      </td>
                      <td>
                      <Textbox/>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td><center><a href="#" onClick={this.handleAddRow.bind(this)}> Add Row</a> </center></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}