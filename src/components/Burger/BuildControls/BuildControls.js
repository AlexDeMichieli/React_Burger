import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    BuildControls : {
        width: "100%",
        backgroundColor: "#FBD6C6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "auto",
        padding: "10px 0px",
        marginTop: "20xpx"
    }
        // justify-content: center;
        // align-items: center;
        // text-align: center;
        // box-shadow: 13px 15px 7px -5px rgba(0,0,0,0.08);;
        // margin: auto;
        // padding: 10px 0px;
        // margin-top: 20px;
  });


const controls = [

    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},


]

const buildControls =(props) => {

  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    
    </div>
  );


    return (

        <div>
        {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer  
                BackdropProps={{ invisible: true }}
                anchor={anchor} open={state[anchor]} 
                onClose={toggleDrawer(anchor, false)}
                style= {{display: "flex"}}
            >
            <div className={classes.BuildControls}>
            <Typography variant="h4">$<strong>{props.price}</strong></Typography>
                {controls.map(ctrl =>
                <BuildControl 
                    added ={() => props.ingredientAdded(ctrl.type)}
                    removed ={() => props.ingredientRemoved(ctrl.type)}
                    disabled ={props.disabled[ctrl.type]}
                    key = {ctrl.label} 
                    label={ctrl.label}
            />
            )}
                <button 
                    className ={classes.OrderButton} 
                    disabled={!props.purchasable}
                    onClick ={props.ordered}>
                    Order Now
                </button>
              </div>
            </Drawer>
        </React.Fragment>
            ))}

        </div>
    )
}

export default buildControls