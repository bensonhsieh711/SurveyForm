import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormGroup from '@material-ui/core/FormGroup';

export default function Style() {  
  const styleOptions = [
      {key: '0', value : '現代簡約'},
      {key: '1', value : '輕工業風'},
      {key: '2', value : '北歐風格'},
      {key: '3', value : '溫馨鄉村'},
      {key: '4', value : '傳統中式'},
      {key: '5', value : '木紋日式'},
      {key: '6', value : '一般公寓'},
      {key: '7', value : '分擔房租'},
  ];

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
      找房類型
      </Typography>
      <Grid container spacing={0}>       
        <FormGroup row>
            {styleOptions.map((ints) => {
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