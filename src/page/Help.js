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

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(3),
    },
  }));

export default function Help() {
    const classes = useStyles();
    const [value, setValue] = React.useState('yes');

    const handleChange = event => {
      setValue(event.target.value);
    };
    
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
      是否需要幫忙找房?
      </Typography>
      <Grid container spacing={0}>               
        <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel value="yes" control={<Radio icon={<Favorite />} checkedIcon={<FavoriteBorder />} />} label="是" />
          <FormControlLabel value="no" control={<Radio icon={<Favorite />} checkedIcon={<FavoriteBorder />} />} label="否" />
        </RadioGroup>
      </FormControl>
    </Grid>      
    </React.Fragment>
  );
}