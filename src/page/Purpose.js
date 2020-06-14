import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormGroup from '@material-ui/core/FormGroup';
import { UserConsumer } from '../context/GlobalContext';
import Slide from '@material-ui/core/Slide';

export default function Purpose() {
  return (
    <UserConsumer>
      {({ updateOptions, purposeOptions }) =>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <div>
            <React.Fragment>
              <Typography variant="h4" gutterBottom>
                找房目的</Typography>
              <Grid container spacing={0}>
                <FormGroup row>
                  {purposeOptions.map((purpose) => {
                    return <FormControlLabel
                      key={purpose.key} label={purpose.key}
                      control={
                        <Checkbox checked={purpose.value}
                          onClick={event => updateOptions(event, purpose, 'purpose')}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          color="secondary" value={purpose.value} />}
                    />;
                  })}
                </FormGroup>
              </Grid>
            </React.Fragment>
          </div>
        </Slide>
      }
    </UserConsumer>
  );
}