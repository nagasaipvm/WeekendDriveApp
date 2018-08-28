import React from 'react';

export default class AllRequestsDetails extends React.Component {
   constructor()
   {
     super();
     this.state = {
       results : []
     };
   }
   componentDidMount()
   {
     fetch('https://jsonplaceholder.typicode.com/todos/')
     .then(result => result.json())
     .then(results => this.setState({results})
     )
   }
   render() {
    var borderStyle ={
      "border": "1px solid black",
      "borderCollapse": "collapse",
      "padding": "5px"

    };
  	return(
      
    	<table width="100%" cols ="9" style={borderStyle}> 
        <tr width="100%">
        <th width="5%"   style={borderStyle}>S.No</th>
        <th width="10%"  style={borderStyle}>Request ID </th>
        <th width="10%"  style={borderStyle}>No. Of Positions</th>
        <th width="15%"  style={borderStyle}>Location</th>
        <th width="15%"  style={borderStyle}>End Client </th>
        <th width="15%"  style={borderStyle}>Skill Set </th>
        <th width="10%"  style={borderStyle}>Level </th>
        <th width="10%"  style={borderStyle}>Interview Date </th>
        <th width="10%"  style={borderStyle}>Status </th>
        </tr>
        <tr width="100%"/> 
        {this.state.results.length ?this.state.results.map(item=>  <tr width="100%">
          <td width="5%"   style={borderStyle}> <input type="checkbox" value=""/> {item.userId} </td>
          <td width="10%"  style={borderStyle}>{item.userId}</td>
          <td width="10%"  style={borderStyle}>{item.id}</td>
          <td width="10%"  style={borderStyle}>{item.title}</td>
          <td width="10%"  style={borderStyle}>{item.title}</td>
          <td width="10%"  style={borderStyle}>{item.userId} </td>
          <td width="10%"  style={borderStyle}>{item.id}</td>
          <td width="10%"  style={borderStyle}>{item.title}</td>
          <td width="10%"  style={borderStyle}>{item.title}</td>
          </tr>) :<tr> </tr>}
        </table>
   )
  }
}