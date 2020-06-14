import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
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
      width: 200,
      background: 'white'
    },
  }
}));
export default function Help() {
  const classes = useStyles();

  return (
    <UserConsumer>
      {({ updateOptions, isNeedHelp, isShowTextField, hopeThings }) =>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <div>
            <React.Fragment>
              <Typography variant="h4" gutterBottom>
                是否需要幫忙找房</Typography>
              <Grid container spacing={0}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup value={isNeedHelp} onChange={event => updateOptions(event, null, 'help')}>
                    <FormControlLabel label="否"
                      control={
                        <Radio icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          value={'no'}
                        />}
                    />
                    <FormControlLabel label="是"
                      control={
                        <Radio icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          value={'yes'}
                        />}
                    />
                  </RadioGroup>
                  {isShowTextField ?
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField name="userid"
                        label="(最多50個字元)"
                        variant="filled" autoFocus={true}
                        value={hopeThings}
                        multiline rowsMax="4"
                        onChange={event => updateOptions(event, null, 'hope')}
                        fullWidth={true}
                        margin="normal"
                      /></form> : null}
                </FormControl>
              </Grid>
            </React.Fragment>
          </div>
        </Slide>
      }
    </UserConsumer>
  );
}