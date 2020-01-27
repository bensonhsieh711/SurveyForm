import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormGroup from '@material-ui/core/FormGroup';

export default function Interest() {
  const interestOptions = [
    { key: '0', value: '唱歌' },
    { key: '1', value: '健身' },
    { key: '2', value: '畫畫' },
    { key: '3', value: '旅遊' },
    { key: '4', value: '滑雪' },
    { key: '5', value: '飲酒' },
    { key: '6', value: '唱歌' },
    { key: '7', value: '健身' },
    { key: '8', value: '畫畫' },
    { key: '9', value: '旅遊' },
    { key: '10', value: '滑雪' },
    { key: '11', value: '飲酒' },
  ];

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        興趣
      </Typography>
      <Grid container spacing={0}>
        <FormGroup row>
          {interestOptions.map((ints) => {
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