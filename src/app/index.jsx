import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeUser from './components/Welcome.jsx';
import RequestButtonsComponent from './components/requestButtons.jsx';
import AllRequestsDetails from './components/requestDetails.jsx';

class AppComponent extends React.Component {
   
   render() {
       return (
            <table width="100%" height ="100%">
            <tr height="10%">
            <div id ="welcomeDiv">
                <WelcomeUser/>
            </div>
            </tr>
            <tr height="10%">
            <div id ="requestDiv">
                <RequestButtonsComponent/>
            </div>
            </tr>
            <tr height="10%"></tr>
            <tr height="10%"></tr>
            <tr height="60%">
            <div id ="requestDetailsDiv">
                <AllRequestsDetails/>
            </div>
            </tr>
            <tr>
            </tr>
            </table>
    )
   }
}
ReactDOM.render(<AppComponent/>,document.getElementById('app'));