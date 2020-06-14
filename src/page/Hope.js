import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { UserConsumer } from '../context/GlobalContext';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  input: {
    color: "white",
    maxLength: 50,
  }
}));

export default function Hope() {
  const classes = useStyles();
  //const [value, setValue] = React.useState('');
  // const handleChange = event => {
  //   setValue(event.target.value);
  // };
  return (
    <UserConsumer>
      {({ updateOptions, hopeThings }) =>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <div>
            <React.Fragment>
              <Typography variant="h4" gutterBottom>
                希望平台可以幫忙什麼?</Typography>
              <Grid container spacing={0}>
                <FormControl className={classes.formControl}>
                  <TextField name="userid"
                    label="(最多50個字元)"
                    variant="outlined"
                    autoFocus={true}
                    value={hopeThings}
                    onChange={event => updateOptions(event, null, 'hope')}
                    fullWidth={true}
                    margin="normal"
                    InputProps={{ className: classes.input }}
                  />
                </FormControl>
              </Grid>
            </React.Fragment>
          </div>
        </Slide>
      }
    </UserConsumer>
  );
}