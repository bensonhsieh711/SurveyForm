import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormGroup from '@material-ui/core/FormGroup';

export default function Purpose() {  
  const purposeOptions = [
      {key: '0', value : '找室友'},
      {key: '1', value : '語言交換'},
      {key: '2', value : '分擔房租'},
  ];

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
      找房目的
      </Typography>
      <Grid container spacing={0}>       
        <FormGroup row>
            {purposeOptions.map((ints) => {
                return <FormControlLabel key={ints.key}
                control={<Checkbox icon={<FavoriteBorder />}
                checkedIcon={<Favorite />} 
                color="secondary" value="yes" />}
                label={ints.value}                
                />;
            })}
        </FormGroup>
      </Grid>      
    </React.Fragment>
  );
}