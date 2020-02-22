import React from 'react';
import Aux from '../../hoc/Aux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// const NavBar = () => {

//     return (

//         <AppBar position ='static'>

//         </AppBar>
//     )
// }

// export default NavBar

const layout = (props) => (
    <Aux>
        <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" >
                 Header
             </Typography>
            </Toolbar>
        </AppBar>
        <div> ToolBar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout;