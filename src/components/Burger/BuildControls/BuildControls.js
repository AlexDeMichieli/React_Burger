import React from 'react';
import styles from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    BuildControls : {
        height: "100%",
        backgroundColor: "#FBD6C6",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "auto",
        width: '250px',
    },
    OrderButton : {

      backgroundColor: "#DED29E",
      outline: "none",
      cursor: "pointer",
      border: "1px solid #966909",
      color: "white",
      fontFamily: 'inherit',
      fontSize: "1.2em",
      padding: "15px 30px",
      boxShadow: "2px 2px 2px #966909",
    },

    PurchaseButton: {
      backgroundColor: "rgb(161, 201, 241)", 
      color: "white", 
      display: 'block', 
      height: "450px", 
      width: "50px",
      writingMode: "vertical-lr",
      textOrientation: "upright",
      position: "fixed",
      top: "250px",
      left: "10px"
    },


  });


const controls = [

    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},


]

const buildControls =(props) => {

  console.log('from buildCcontrol',props.show)
  //if props.show drawer should be set to false
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
    left: false,

  });
 

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;  
    }

    setState({ ...state, [anchor]: open });
  
  };

  const closeDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
    setTimeout(function(){ props.ordered(); }, 200);
     
  }

    return (

        <Container style={{textAlign: 'center' }}>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
              <Button variant="contained" className = {classes.PurchaseButton} variant="contained" color="primary" onClick={toggleDrawer(anchor, true)}><div style={{transform: "rotate(270deg)"}}>Select Ingredients</div></Button>
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
                      className={[classes.OrderButton, styles.OrderButton].join(" ")} 
                      disabled={!props.purchasable}
                      onClick ={closeDrawer(anchor, false)}
                  >Order Now</button>
                </div>
              </Drawer>
          </React.Fragment>
            ))}
        </Container>
    )
}

export default buildControls