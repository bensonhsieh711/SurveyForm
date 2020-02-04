import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormGroup from '@material-ui/core/FormGroup';
import { UserConsumer } from '../context/GlobalContext';

export default function Location() {
  return (
    <UserConsumer>
      {({ updateOptions, loactionOptions }) =>
        <React.Fragment>
          <Typography variant="h4" gutterBottom>
            找房的區域或捷運站</Typography>
          <Grid container spacing={0}>
            <FormGroup row>
              {loactionOptions.map((location) => {
                return <FormControlLabel
                  key={location.key} label={location.key}
                  control={
                    <Checkbox
                      checked={location.value}
                      onClick={event => updateOptions(event, location, 'location')}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      color="secondary" value={location.value} />}
                />;
              })}
            </FormGroup>
          </Grid>
        </React.Fragment>
      }
    </UserConsumer>
  );
};