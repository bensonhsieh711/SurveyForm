import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl'
import { UserConsumer } from '../context/GlobalContext';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      //width: 200,
      background: 'white'
    },
  }
}));

export default function Content() {
  const classes = useStyles();

  return (
    <UserConsumer>
      {({ updateOptions, email }) =>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <div>
            <React.Fragment>
              <Typography variant="h4" gutterBottom>
                個人資料與聯絡方式</Typography>
              <Grid container spacing={0}>
                <FormControl name='formControl' component="fieldset" className={classes.formControl}>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField name="email"
                      label="E-mail"
                      variant="filled" autoFocus={true}
                      value={email}
                      multiline rowsMax="4"
                      onChange={event => updateOptions(event, null, 'email')}
                      fullWidth={true}
                      margin="normal"
                    /></form>
                </FormControl>
              </Grid>
            </React.Fragment>
          </div>
        </Slide>
      }
    </UserConsumer>
  );
}