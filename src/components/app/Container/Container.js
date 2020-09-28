import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Body from '../Body/Body';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

const Container = () => {
    const classes = useStyles();

    return (
        <div className="App">
            <Grid container className={classes.root}>
                <Grid item sm={12} md={4} lg={3}>
                    <Sidebar />
                </Grid>
                <Grid item sm={12} md={8} lg={9}>
                    <Body />
                </Grid>
            </Grid>
        </div>
    );
};

export default Container;