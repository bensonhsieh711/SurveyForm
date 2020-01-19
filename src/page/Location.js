import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormGroup from '@material-ui/core/FormGroup';

export default function Location() {  
  const locationOptions = [
      {key: '0', value : '大安區'},
      {key: '1', value : '松山區'},
      {key: '2', value : '信義區'},
      {key: '3', value : '中山區'},
      {key: '4', value : '中正區'},
  ];

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
      找房的區域或捷運站
      </Typography>
      <Grid container spacing={0}>       
        <FormGroup row>
            {locationOptions.map((ints) => {
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