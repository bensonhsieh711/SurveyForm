import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import InterestPage from './page/Interest';
import PurposePage from './page/Purpose';
import StylePage from './page/Style';
import LocationPage from './page/Location';
import HelpPage from './page/Help';
import HopePage from './page/Hope';
import ContentPage from './page/Content';
import SubmitButton from './tool/SubmitButton';
import { UserProvider } from './context/GlobalContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInterest: true,
      currentPage: 0,
      areaList: [],
    };
  };
  onHandleSubmit = () => {
    this.setState({ currentPage: 0 });
  };

  onHandleNextPage = () => {
    let order = 0;
    if (this.state.currentPage <= 6) {
      order = this.state.currentPage + 1;
    }
    this.setState({ currentPage: order });
    //console.log(this.state.currentPage);
  }

  onHandlePreviousPage = () => {
    let order = 0;
    if (this.state.currentPage > 0) {
      order = this.state.currentPage - 1;
    }
    this.setState({ currentPage: order });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserProvider>
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
              {this.state.currentPage > 0 ?
                <Button variant="contained" onClick={this.onHandlePreviousPage}>
                  上一頁</Button> : null}
              {this.state.currentPage <= 5 ?
                <Button variant="contained" onClick={this.onHandleNextPage}>
                  下一頁</Button> : null}
              {this.state.currentPage === 6 ?
                <SubmitButton value={(event) => { }} /> : null}
            </div>
          </UserProvider>
        </header>
      </div>
    );
  }
}
export default App;