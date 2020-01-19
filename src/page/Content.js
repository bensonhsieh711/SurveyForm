import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(3),
    },
    input: {
    color: "white",
    maxLength: 50
    }
  }));

export default function Content() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = event => {
      setValue(event.target.value);
    };

    // handleInputChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    // }
    
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
      個人資料與聯絡方式
      </Typography>
      <Grid container spacing={0}>               
      {/* <FormControl className={classes.formControl}>
        <TextField name="userid" 
            label="(最多50個字元)"
            autoFocus={true}
            value={value}
            onChange={handleChange}
            fullWidth={true}
            margin="normal"
            InputProps={{ className: classes.input }}
        />
    </FormControl> */}
    </Grid>      
    </React.Fragment>
  );
}