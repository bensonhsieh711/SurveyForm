import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormGroup from '@material-ui/core/FormGroup';
import { UserConsumer, UserProvider } from '../context/GlobalContext';
import Button from '@material-ui/core/Button';

const areaOptions = ['中正區', '大同區', '中山區', '松山區', '大安區',
    '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'];

export default function Location() {
    return (
        <UserConsumer>
            {({ updateArea, checkArea, submitForm }) => (
                <React.Fragment>
                    <Typography variant="h4" gutterBottom>
                        找房的區域或捷運站</Typography>
                    <Grid container spacing={0}>
                        <FormGroup row>
                            {areaOptions.map((area) => {
                                {
                                    return <FormControlLabel key={areaOptions.indexOf(area)}
                                        control={<Checkbox
                                            // checked={this.state.areaList.indexOf(area) > -1}
                                            checked={checkArea(area)}
                                            onClick={event => updateArea(event)}
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            color="secondary" value={area} />}
                                        label={area}
                                    />;
                                };
                            })}
                        </FormGroup>
                    </Grid>
                    <div>
                        <Button variant="contained"
                            onClick={event => submitForm(event)}
                        >提交問卷</Button>
                    </div>
                </React.Fragment>
            )}
        </UserConsumer>
    );
}