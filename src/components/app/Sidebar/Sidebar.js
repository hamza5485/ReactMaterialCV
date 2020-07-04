import React from 'react';
import { makeStyles } from '@material-ui/core';
import Contact from '../Contact';
import { COLORS } from '../../../assets/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: COLORS.primary,
        height: '100%'
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