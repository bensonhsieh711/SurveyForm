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

export default function Interest() {
  return (
    <UserConsumer>
      {({ updateOptions, interestOptions }) =>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <div>
            <React.Fragment>
              <Typography variant="h4" gutterBottom>
                興趣</Typography>
              <Grid container spacing={0}>
                <FormGroup row>
                  {interestOptions.map((interest) => {
                    return <FormControlLabel
                      key={interest.key} label={interest.key}
                      control={
                        <Checkbox checked={interest.value}
                          onClick={event => updateOptions(event, interest, 'interest')}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          color="secondary" value={interest.value} />}
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