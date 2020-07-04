import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Sidebar from './components/app/Sidebar/Sidebar';
import Body from './components/app/Body/Body';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

const App = () => {
    const classes = useStyles();

    return (
        <div className="App">
            <Grid container className={classes.root}>
                <Grid item xs={6} sm={5} md={4} lg={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={6} sm={7} md={8} lg={9}>
                    <Body />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;