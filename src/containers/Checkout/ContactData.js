import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';



const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


class ContactData extends Component {
    constructor(props) {
        super(props);

        this.state = {  
            name: '',
            email: '',
            address: {
                street: '',
                postalCode: '',
            }
        }
    }
    render() { 

        const classes = useStyles();

        return ( 
            <div>
                <h4>Enter your Info</h4>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <Button
                         variant="contained"
                         color="primary"
                        endIcon={<Icon>send</Icon>}
                    >Send</Button>
                </form>
            </div>
        );
    }
}
 
export default ContactData;