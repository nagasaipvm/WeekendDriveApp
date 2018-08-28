import React from 'react';
import ReactDOM from 'react-dom';
import NewRequest from './newRequest.jsx';
import Textbox from'./textbox.jsx';
import Checkbox from './checkbox.jsx';
import TextArea from './textarea.jsx';

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

   };
   
    return (
      <div style={popupstyle}>
          <table align="top" width="100%">
          <tr><center> <h3>New Request Form</h3> </center> </tr>
          </table>
          <hr></hr>
          <PopupDetails text={this.props.text} closePopup ={this.props.closePopup} ></PopupDetails>
        </div>
    );
  }
}
class PopupDetails extends React.Component {
  constructor()
   {
     super();
     this.state = {
      nop : "",
      skillset : "",
      location : "",
      client :"",
      project :"",
      requiredskills : "",
      goodtohaveskills : "",
      additionaldetails : ""
     };
   }
   handleNop(event)
   {
    this.setState({nop: event.target.value})
   }
   handleskillSet(event)
   {
    this.setState({skillset: event.target.value})
   }
   handleLocation(event)
   {
    this.setState({location: event.target.value})
   }
   handleClient(event)
   {
    this.setState({client: event.target.value})
   }
   handleProject(event)
   {
    this.setState({project: event.target.value})
   }
   handlerequiredskills(event)
   {
     this.setState({requiredskills: event.target.value})
   }
   handlegthskills(event)
   {
     this.setState({goodtohaveskills: event.target.value})
   }
   handleadddetails(event)
   {
     this.setState({additionaldetails: event.target.value})
   }
   submitRequest()
   {
     alert('going to submit the following data'+JSON.stringify(this.state));
     return fetch('http://api.symfony-3.dev/app_dev.php/posts', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(this.state),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
   }
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

    return (
          <form>
          <table width="100%" style={tableStyle} cols="4"> 
           <tr>
              <td width="5%"> </td>
              <td width="45%">Number of positions </td>
              <td width="25%"> <Textbox name="nop" value="{this.state.nop}" onChange ={this.handleNop.bind(this)}> </Textbox> </td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">Skill Set </td>
              <td width="25%"> <Textbox id="skillset" name="skillset" value="{this.state.skillset}" onChange ={this.handleskillSet.bind(this)}> </Textbox> </td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">Location </td>
              <td width="25%"> <Textbox id="location" name="location" value="{this.state.location}" onChange ={this.handleLocation.bind(this)}> </Textbox> </td>
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
              <td width="25%"> <Textbox id="client" name="client" value="{this.state.client}" onChange ={this.handleClient.bind(this)}/></td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">Project (For Billing the interview process) </td>
              <td width="25%"> <Textbox id="project" name="project" value="{this.state.project}" onChange ={this.handleProject.bind(this)}/></td>
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
              <td colSpan="2"> </td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">Required Skills </td>
              <td width="25%"> <Textbox id="requiredskills" name="requiredskills" value="{this.state.requiredskills}" onChange={this.handlerequiredskills.bind(this)}/></td>
              <td width="25%"></td>
           </tr>
           <tr>
              <td width="5%"> </td>
              <td width="45%">Good to Have Skills </td>
              <td width="25%"> <Textbox id="goodtohaveskills" name="goodtohaveskills" value="{this.state.goodtohaveskills}" onChange={this.handlegthskills.bind(this)}/></td>
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
              <td colSpan="2">  <TextArea id ="additionaldetails" name ="additionaldetails" value ="{this.state.additionaldetails}" onChange={this.handleadddetails.bind(this)}> </TextArea></td>
              <td width="25%"></td>
           </tr>
           <tr>
           <td width="10%"> </td>
           <td colSpan="2" border="0px solid">
           <table width="100%" >
                  <tr>
                    <td> <button style ={buttonStyle}>SAVE</button> </td>
                    <td> <button style ={buttonStyle} onClick={this.submitRequest.bind(this)}>SUBMIT</button> </td>
                    <td> <button style ={buttonStyle} onClick={this.props.closePopup}>CANCEL</button></td>
                  </tr>
                 </table>
           </td>
           <td width="25%"></td>
           </tr>
           </table>
           </form>

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