import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './Checkbox';
import Address from './page/Address';
import Button from '@material-ui/core/Button';
import InterestPage from './page/Interest';
import PurposePage from './page/Purpose';
import StylePage from './page/Style';
import LocationPage from './page/Location';
import HelpPage from './page/Help';
import HopePage from './page/Hope';
import ContentPage from './page/Content';
//import {InterestContext, interestList} from './context/InterestContext';
//import {GlobalContext} from './context/GlobalContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInterest : true,
      currentPage: 0,      
    };
  };
  onHandleSubmit = () => {
    this.setState({currentPage: 0});  
  };

  onHandleNextPage = () => {
    let order = 0;
    if (this.state.currentPage <= 6) {
      order = this.state.currentPage + 1;
    }
    this.setState({currentPage: order});
    //console.log(this.state.currentPage);
  }
  render() {    
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>*/}
          <div>
            {this.state.currentPage === 0 ? <InterestPage /> : null}
            {this.state.currentPage === 1 ? <PurposePage /> : null}
            {this.state.currentPage === 2 ? <StylePage /> : null}
            {this.state.currentPage === 3 ? <LocationPage /> : null}
            {this.state.currentPage === 4 ? <HelpPage /> : null}
            {this.state.currentPage === 5 ? <HopePage /> : null}
            {this.state.currentPage === 6 ? <ContentPage /> : null}
          </div>
          <div>
            {this.state.currentPage <= 5 ? 
      <Button variant="contained" onClick={this.onHandleNextPage}>
        下一頁
      </Button> : null}
      {this.state.currentPage === 6 ?
      <Button variant="contained" onClick={this.onHandleSubmit}>
        完成
      </Button> : null}
      </div>          
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;