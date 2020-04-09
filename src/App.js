import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Orders from './containers/Orders/Orders'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  tabs: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


const App  = () => {
  
  const classes = useStyles();

    return (

      <Router>
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar style = {{backgroundColor: "#A1C9F1", height: '90px'}}>
           <Button color="inherit" label="Orders" className ={classes.menuButton} to="/orders" component={Link}>Orders</Button>
            <div className={classes.title}>
              <Button className ={classes.menuButton} color="inherit" label="Home" to="/" component={Link}>Home</Button>
              <Button color="inherit" label="Checkout" to="/checkout" component={Link}>Checkout</Button>
            </div>
              <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
            <Switch>
                  <Route path ='/' exact component={BurgerBuilder}/>
                  <Route path ='/checkout' component={Checkout}/>
                  <Route path ='/orders' component={Orders}/>
            </Switch>
        </div>
      </Router>
    );
  }

export default App;
