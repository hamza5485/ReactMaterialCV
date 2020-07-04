import React from 'react';
import { makeStyles } from '@material-ui/core';
import Contact from '../Contact';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#2e3f4f',
    }
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Contact />
        </div>
    );
};

export default Sidebar;