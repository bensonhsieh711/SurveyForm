import React from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import createTypography from 'material-ui/styles/typography';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

//fontFamily: "'Noto Sans TC', sans-serif",
const theme = createMuiTheme({
  typography: {
    fontFamily: "'Noto Sans TC', sans-serif"
  }
});

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
});

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
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <MuiThemeProvider theme={theme}>
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
                  <Button variant="contained" className={classes.button} onClick={this.onHandlePreviousPage}>
                    上一頁</Button> : null}
                {this.state.currentPage <= 5 ?
                  <Button variant="contained" className={classes.button} onClick={this.onHandleNextPage}>
                    下一頁</Button> : null}
                {this.state.currentPage === 6 ?
                  <SubmitButton className={classes.button} value={(event) => { }} /> : null}
              </div>
            </UserProvider>
          </MuiThemeProvider>
        </header>
      </div>
    );
  }
}
//export default App;
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);