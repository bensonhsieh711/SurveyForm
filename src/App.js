import React from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InterestPage from './page/Interest';
import PurposePage from './page/Purpose';
import StylePage from './page/Style';
import LocationPage from './page/Location';
import HelpPage from './page/Help';
import ContentPage from './page/Content';
import SubmitButton from './tool/SubmitButton';
import { UserProvider } from './context/GlobalContext';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Noto Sans TC', sans-serif"
  }
});

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    width: '100%',
  },
});

const steps = ['興趣', '目的', '類型', '區域', '需求', '個人資料'];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      direction: 'left',
    };
  };

  onHandleNextPage = () => {
    let order = 0;
    if (this.state.pageIndex <= 6) {
      order = this.state.pageIndex + 1;
    }
    this.setState({ pageIndex: order });
    //console.log(this.state.pageIndex);
  };

  onHandlePreviousPage = () => {
    let order = 0;
    if (this.state.pageIndex > 0) {
      order = this.state.pageIndex - 1;
    }
    this.setState({ pageIndex: order });
  };

  onHandleStep = (event, index) => {
    event.preventDefault();
    this.setState({ pageIndex: index });
  };

  checkCompleted = (index) => {
    return index === this.state.pageIndex;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <MuiThemeProvider theme={theme}>
            <UserProvider>
              <div className={classes.root}>
                <Stepper nonLinear activeStep={this.state.pageIndex}>
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepButton onClick={event => this.onHandleStep(event, index)} completed={this.checkCompleted(index)}>
                        {label}
                      </StepButton>
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div>
                {this.state.pageIndex === 0 ? <InterestPage /> : null}
                {this.state.pageIndex === 1 ? <PurposePage /> : null}
                {this.state.pageIndex === 2 ? <StylePage /> : null}
                {this.state.pageIndex === 3 ? <LocationPage /> : null}
                {this.state.pageIndex === 4 ? <HelpPage /> : null}
                {/* {this.state.pageIndex === 5 ? <HopePage /> : null} */}
                {this.state.pageIndex === 5 ? <ContentPage /> : null}
              </div>
              <div>
                {this.state.pageIndex > 0 ?
                  <Button variant="contained" className={classes.button} onClick={this.onHandlePreviousPage}>
                    上一頁</Button> : null}
                {this.state.pageIndex < steps.length - 1 ?
                  <Button variant="contained" className={classes.button} onClick={this.onHandleNextPage}>
                    下一頁</Button> : null}
                {this.state.pageIndex === steps.length - 1 ?
                  <SubmitButton className={classes.button} value={() => { }} /> : null}
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