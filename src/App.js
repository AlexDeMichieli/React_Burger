import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Orders from './containers/Orders/Orders'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


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


const App  = ({location}) => {
  
  const classes = useStyles();

    return (
      
      <div className={classes.root}>
    
            <div>
              <AppBar position="static">
                <Toolbar style = {{backgroundColor: "#A1C9F1", height: '90px'}}>
                  <Tabs value={location.pathname}>
                    <Tab label="home" value="/" component={Link} to={'/'} />
                    <Tab label="checkout" value="/checkout" component={Link} to={"/checkout"} />
                    <Tab
                      value="/orders"
                      label="orders"
                      component={Link}
                      to={"/orders"}
                    />
                  </Tabs>
                </Toolbar>
              </AppBar>
              <Switch>
                  <Route path ='/' exact component={BurgerBuilder}/>
                  <Route path ='/checkout' component={Checkout}/>
                  <Route path ='/orders' component={Orders}/>
            </Switch>
            </div>
      </div>

    );
  }

export default withRouter(App);