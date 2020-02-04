import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormGroup from '@material-ui/core/FormGroup';
import { UserConsumer } from '../context/GlobalContext';

export default function Style() {
  return (
    <UserConsumer>
      {({ updateOptions, styleOptions }) =>
        <React.Fragment>
          <Typography variant="h4" gutterBottom>
            找房風格</Typography>
          <Grid container spacing={0}>
            <FormGroup row>
              {styleOptions.map((style) => {
                return <FormControlLabel
                  key={style.key} label={style.key}
                  control={
                    <Checkbox checked={style.value}
                      onClick={event => updateOptions(event, style, 'style')}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      color="secondary" value={style.value} />}
                />;
              })}
            </FormGroup>
          </Grid>
        </React.Fragment>
      }
    </UserConsumer>
  );
}